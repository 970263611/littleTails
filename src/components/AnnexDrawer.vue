<template>
  <q-drawer
    v-model="isAnnexShow"
    :value='false'
    :mini-width='200'
    :breakpoint='700'
    content-class='hide-scrollbar'
    overlay
    ref="LeftDrawer"
    elevated
    side='right'
    class='bg-blur'
  >
  <div class="scroll full-height annexDrawer">
    <q-scroll-area
      :thumb-style = "{display:'none'}"
      :bar-style= "{display:'none'}"
      class="exclude-header note-list fit"
    >
      <h3>附件列表</h3>
      <div>
        
      </div>
    </q-scroll-area>
    <q-icon
      name='close'
      style="bottom:10px;right: 10px;"
      class="
      absolute-bottom-right fab-icon cursor-pointer material-icons-round neeto-icon z-max
      "
      @click='hide'
      size='24px'
      color='#26A69A'
      v-ripple
    />
  </div>
  </q-drawer>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: mapSettingState,
  mapActions: mapSettingActions
} = createNamespacedHelpers('setting')
export default {
  data(){
    return{
    }
  },
  computed:{
    ...mapSettingState(['isAnnexShow'])
  },
  methods:{
    hide(){
      this.$store.commit('setting/click_annex_show',!this.isAnnexShow)
    }
  }
}

</script>

<style lang="scss" scoped>
.annexDrawer{
  // position: relative;
  padding:  0 14px 14px;
  // margin: 0 12px;
  // border-right: 1px solid #ddd;
}
</style>
