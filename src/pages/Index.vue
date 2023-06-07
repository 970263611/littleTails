<template>
  <q-page class="flex indexPage">
    <!-- 拖动效果 -->
    <q-splitter
      v-model="splitterWidthValue"
      :limits="splitterLimits"
      class="full-width"
      unit="%"
      separator-class="bg-transparent"
      before-class="overflow-hidden"
      after-class="hide-scrollbar"
    >
      <!-- 左侧列表 -->
      <template v-slot:before>
        <!-- 笔记列表 -->
        <Sidebar key="sidebar" v-show="tabaListShow"></Sidebar>

        <!-- 笔记目录 -->
        <NoteOutlineDrawer key="note_outline_drawer" v-if="!tabaListShow"></NoteOutlineDrawer>
      </template>

      <!-- 右侧主内容区 -->
      <template v-slot:after>
        <div class="full-height mian_content">
          <!-- 文章编辑器 --> 
          <div class="my_dom" v-show="!isSourceMode && isNullStyle">
            <muya></muya>
          </div>

          <!--代码编辑器-->
          <div v-if="isSourceMode" class="monaco_dom">
            <monaco
            ref="monaco"
            v-if="containerReload"
            :opts="opts"
            @change="changeValue"
            :isDiff="isDiff"
            :height="600"
            ></monaco>
          </div>

          <!-- 动画效果 组，包含多个元素-->
          <!--右侧按钮组 -->
          <div class="rgBtnBlock">
            <transition
              appear
              enter-active-class="animated fadeIn" 
              leave-active-class="animated fadeOut"
            >
              <!-- 按钮列表 -->
              <RightBtnList></RightBtnList>
            </transition>
          </div>
        </div>

        <!-- 附件列表 -->
        <AnnexDrawer></AnnexDrawer>
      </template>
    </q-splitter>
  </q-page>
</template>

<script>
import monaco from "../components/MonacoView.vue";
import Sidebar from "../components/Sidebar.vue";
import RightBtnList from "../components/RightBtnList.vue";
import muya from "../components/muyaView.vue"
import bus from '../components/bus'
import { createNamespacedHelpers } from "vuex";
import NoteOutlineDrawer from "src/components/NoteOutlineDrawer.vue";
import AnnexDrawer from "src/components/AnnexDrawer.vue";
const { mapState: mapSettingState, mapActions: mapSettingActions } =
  createNamespacedHelpers("setting");
export default {
  name: "PageIndex",
  components: {
    muya,
    monaco,
    Sidebar,
    RightBtnList,
    NoteOutlineDrawer,
    AnnexDrawer
},
  data() {
    return {
      opts: {
        value: "3333",
        readOnly: false, // 是否可编辑
        language: "markdown", // 语言类型
        theme: "vs-dark", // 编辑器主题
      },  
      isDiff: false,
      containerReload: true,
      splitterWidthValue: 30,
      newsplitterWidthValue:30,
      splitterLimits: [0, 60],
      muyaData:{},
    };
  },
  computed: {
    ...mapSettingState(["isSideBarShow",'tabaListShow','isNullStyle',
     "isSourceMode",'toggleLeftDrawer','enablePreviewEditor']),
  },
  provide() {
    return {
      reload: this.reload,
    };
  },
  mounted(){
    window.addEventListener("resize", () => {
       this.reload()
      })
  },
  watch: {
    // 笔记列表
    isSideBarShow: function (currentData) {
      console.log(currentData,this.toggleLeftDrawer);
      this.splitterLimits = [0, 60];
      console.log(this.newsplitterWidthValue);
      this.splitterWidthValue = this.newsplitterWidthValue;
      if(!currentData && !this.toggleLeftDrawer){
        this.splitterLimits = [0, 0];
        this.splitterWidthValue = 0;

      }
    },
    // 笔记目录
    toggleLeftDrawer:function (currentData) {
      console.log(currentData);
      this.splitterLimits = [0, 60];
      this.splitterWidthValue = this.newsplitterWidthValue;
      if(!currentData && !this.isSideBarShow){
        this.splitterLimits = [0, 0];
        this.splitterWidthValue = 0;
      }
      
    },
    splitterWidthValue:function(currentData){
      if(currentData){
        this.newsplitterWidthValue = currentData
      }
    },
    enablePreviewEditor:function(currentData){
      document.querySelector('.ag-show-quick-insert-hint').setAttribute('contenteditable', currentData)    
    }
  },
  methods: {
    changeValue(val) {
      console.log(val);
      bus.$emit('muyaData',val)
    },
    notehide(){
      this.$store.commit('setting/click_toggle_left_drawer',false)
    },
    changeMode() {},
    async reload() {
      this.containerReload = false;
      await this.$nextTick();
      this.containerReload = true;
    },
  },
};
</script>
<style>
.my_dom{
  height: 93.5vh;
  overflow: auto;
  width: 100%;
}
.monaco_dom{
  width: 85%;
  /* max-width: 85%; */
  min-width: 400px;
  min-height: 100%;
  height: 90vh;
  margin: 0 auto;
}
.mian_content{
  display: flex;
}
</style>
