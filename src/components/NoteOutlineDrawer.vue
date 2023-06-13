<!---笔记目录---->
<template>
  <!-- <q-drawer
    v-model="toggleLeftDrawer"
    :value='false'
    :mini-width='200'
    :breakpoint='700'
    content-class='hide-scrollbar'
    overlay
    ref="LeftDrawer"
    elevated
    side='right'
    class='bg-blur'
  > -->
  <div class="scroll full-height noteoutlinedrawer">
    <q-scroll-area
      :thumb-style = "{display:'none'}"
      :bar-style= "{display:'none'}"
      class="exclude-header note-list fit"
    >
      <q-tree
        :nodes='contentsList ? contentsList : []'
        ref='tree'
        node-key='key'
        default-expand-all
        class='non-selectable z-max'
        :selected.sync='selected'
        :expanded.sync='expanded'
      />
    </q-scroll-area>
    <!-- <q-icon
      name='close'
      style="bottom:10px;right: 10px;"
      class="
      absolute-bottom-right fab-icon cursor-pointer material-icons-round neeto-icon z-max
      "
      @click='hide'
      size='24px'
      color='#26A69A'
      v-ripple
    /> -->
  </div>
  <!-- </q-drawer> -->
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import helper from '../utils/index' //格式化数据
const {
  mapState: mapSettingState,
  mapActions: mapSettingActions
} = createNamespacedHelpers('setting')
export default {
  data(){
    return{
      contentsList:[{},{}],
      selected:'',
      expanded:[],
    }
  },
  computed:{
    ...mapSettingState(['toggleLeftDrawer'])
  },
  created(){
    let markdownChang = JSON.parse(sessionStorage.getItem('markdownChang'))
    this.listData = markdownChang.toc
    this.contentsList = helper.updateContentsList(this.listData)
  },
  methods:{
    hide(){
      this.$store.commit('setting/click_toggle_left_drawer',!this.toggleLeftDrawer)
    },
  }
}

</script>

<style lang="scss" scoped>
.noteoutlinedrawer{
  position: relative;
  padding: 0 28px;
  // margin: 0 12px;
  border-right: 1px solid #ddd;
}
</style>
