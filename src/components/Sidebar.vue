<!---左侧笔记列表--->
<template>
  <div class="scroll bg-white full-height">
    <q-scroll-area class="full-height">
      <!-- 搜索框 -->
      <div class="q-pa-md" v-show="isShowSearch">
        <q-input outlined v-model="searchVal">
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="showAndHideSearch" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <!-- 笔记列表 -->
      <q-list>
        <q-item clickable v-ripple="{ color: '#212121' }" :active="item.active" active-class="bg-grey-3 text-grey-8"
         v-for="(item, index) in listitems" @click="toDetails(item,index)"
          :key="index">
          <q-item-section>
            <div @contextmenu.prevent="openMenu($event, item,index)" class="sidebar_list">
              <!-- 笔记名称 -->
              <div v-if="!item.isEditName" class="note-item-title" v-html="item.title"></div>
              <input type="text" class="note-item-title inpstyle" v-if="item.isEditName" @click.stop  v-model="item.title"  @blur="saveName">
              <!-- 摘要 -->
              <div class="note-item-summary text-grey-7" v-html="item.summary"></div>
              <div class="flex justify-between no-wrap overflow-hidden fa-align-center text-grey-7">
                <!-- 文件夹 -->
                <span v-if="!item.isEditfolder" class="text-left note-info-tag"><q-icon name="category" size="17px" /> {{item.folder}}</span>
                <div v-if="item.isEditfolder" @click.stop>
                  <q-select dense size="md"  @input="saveFolder"  v-model="item.folder" :options="options" />
                </div>
                <!-- 日期 -->
                <span class="text-right note-info-tag"><q-icon name="timer" size="17px" /> {{ "2022-1-1" }}</span>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list> 
    </q-scroll-area>
    <!-- 创建笔记操作 -->
    <q-btn style="bottom: 30px; right: 20px" class="absolute-bottom-right fab-btn" size="lg" round color="primary"
      @click="addNoteHandler" icon="note_add">
      <q-tooltip anchor="center right" self="center left" :offset="[10, 10]"
        content-class=" text-white shadow-4  text-h7">创建笔记</q-tooltip>
    </q-btn>
    <!-- 右键菜单 -->
    <ul class="contextmenu" v-show="menuVisible" :style="{ left: menuLf + 'px', top: menuTp + 'px' }">
      <li @click.prevent="rename">重命名</li>
      <li @click.prevent="fileMove">移动</li>
      <li class="export">
        导出
        <div class="menu_export">
          <p @click.prevent="exportMarkdown">Markdown</p>
          <p @click.prevent="exportPng">PNG</p>
        </div>
      </li>
      <li @click.prevent="fileDelete">删除</li>
    </ul>
    <!-- 移动笔记 -->
    <!-- <q-dialog v-model="fileMoveVisible" ref="dialog" transition-show="fade" transition-hide="fade" class="base-dialog">
      <q-card style="min-width: 400px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">移动笔记</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="q-pa-md">
            <q-option-group :options="options" type="radio" v-model="fileType" />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog> -->
    <!-- 新建笔记/编辑文件夹 -->
    <AddFileDialog ref="addfileVisibleRef"></AddFileDialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import AddFileDialog from './dialog/AddFileDialog.vue';
import bus from '../components/bus'
import { MARKDOWN1, MARKDOWN2 } from './mockData.js';
const {
  mapState: mapSettingState,
  mapActions: mapSettingActions
} = createNamespacedHelpers('setting')
export default {
  components:{
    AddFileDialog
  },
  data() {
    return {
      listitems: [
        {
          title: "3 分钟创建格式美美的笔记.md",
          summary: "如果你想创建格式美美的，且包含文字，表格，图片，公式，甚至是不同型号标题的笔记，那么推荐你使用Markdown",
          isEditName:false,
          isEditfolder:false,
          folder:'文件夹1',
          active:false
        },
        {
          title: "离线同步 — 没网也可以随时查看笔记.md",
          summary: "你可以利用为知笔记随时随地记录和查看有价值的信息，所有数据在电脑、手机、平板、网页可通过同步保持一致。",
          isEditName:false,
          isEditfolder:false,
          folder:'文件夹2',
          active:false

        },
      ],
      menuVisible: false,
      menuLf: 0,
      menuTp: 0,
      currentNoteItem: {},
      currentIndex:0,
      fileMoveVisible: false,
      fileType: "文件夹1",
      options: [
        { label: "文件夹1", value: "文件夹1" },
        { label: "文件夹2", value: "文件夹2" },
        { label: "文件夹3", value: "文件夹3" },
      ],
      searchVal: "",
      MARKDOWN2,
      MARKDOWN1
    };
  },
  computed: {
    ...mapSettingState(["isShowSearch"])
  },
  methods: {
    openMenu(e, item, index) {
      this.currentNoteItem = item;
      this.currentIndex = index
      console.log(item);
      let x = e.pageX;
      let y = e.pageY;
      this.menuLf = x;
      this.menuTp = y;
      this.menuVisible = true;
    },
    showAndHideSearch() {
      this.searchVal = "";
      this.$store.commit("setting/click_toogle_search", !this.isShowSearch);
    },
    rename() {
      this.listitems.forEach(i=>{
         i.isEditName = false
      })
      this.$set(this.listitems[this.currentIndex], 'isEditName', true)
      console.log(document.getElementsByClassName('sidebar_list'))
      this.menuVisible = false;
      this.$nextTick(()=>{
        console.log(document.getElementsByClassName('inpstyle')[0].focus())
      })
    },
    editName(){

    },
    saveName (){
      this.$set(this.listitems[this.currentIndex], 'isEditName', false)

    },
    fileMove() {
      this.listitems.forEach(i=>{
        i.isEditfolder = false
      })
      this.$set(this.listitems[this.currentIndex], 'isEditfolder', true)
      this.menuVisible = false;
    },
    // 移动文件夹操作
    saveFolder(value){                                                                      
      this.$set(this.listitems[this.currentIndex], 'folder', value.label)
      this.$set(this.listitems[this.currentIndex], 'isEditfolder', false)
    },
    fileDelete() {
      this.menuVisible = false;
      this.$q
        .dialog({
          title: "删除笔记",
          ok: "确认",
          cancel: "取消",
        })
        .onOk(() => { });
    },
    exportMarkdown(){

    },
    exportPng(){

    },
    toDetails(item, index) {
      console.log(item);
      this.listitems.forEach(i=>{
         i.active = false
      })
      this.$set(item, 'active', true)
      this.$store.commit("setting/click_sidebar_show", true);
      if(index == 0){
      bus.$emit('articleContent', MARKDOWN2())

      }else if(index == 1){
      bus.$emit('articleContent', MARKDOWN1())

      }
      // else if(item.folder == '文件夹3'){
      // bus.$emit('articleContent', MARKDOWN3)

      // }
      // console.log(MARKDOWN);

    },
    // 创建笔记
    addNoteHandler() {
      this.$refs.addfileVisibleRef.showDialog()
    },
  },
  
};
</script>
<style lang="scss" scoped>
.note-item-title {
  font-size: 18px;
  // height: 34px;
  // line-height: 34px;
  margin-bottom: 6px;
  font-weight: 900;
  color: #3e3d3d;
}

.note-item-summary {
  padding-bottom: 8px;
}

.sidebar_list {
  padding: 6px 12px;
}
.inpstyle{
  border: none;
  background: none;
  border-bottom: 1px solid;
  padding: 0;
  margin-bottom: 10px;
  height: 34px;
  margin-bottom: 6px;
  width: 100%;
}
.inpstyle:focus-visible{
  outline: none;
}


.contextmenu {
  margin: 0;
  background: #fff;
  z-index: 3000;
  position: fixed; //关键样式设置固定定位
  list-style-type: none;
  padding: 5px 0;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #333;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

  .export {
    position: relative;

    &:hover .menu_export {
      display: block;
    }
  }

  .menu_export {
    display: none;
    position: absolute;
    left: 68px;
    background: #fff;
    top: 0;
    border-radius: 4px;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);

    p {
      padding: 7px 16px;

      &:hover {
        background: #eee;
      }
    }
  }

  li {
    margin: 0;
    padding: 7px 16px;
    cursor: pointer;
  }

  li:hover {
    background: #eee;
  }
}
</style>
