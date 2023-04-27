<template>
  <div>
    <q-btn icon="format_align_center" dense flat round
      class="absolute-top-right fab-icon cursor-pointer material-icons-round" size="md" color="#26A69A" v-ripple
      style="top:20px; right: 20px" @click="noteBtn">
    </q-btn>
    <q-btn icon="format_align_center" dense flat round
      class="absolute-top-right fab-icon cursor-pointer material-icons-round" size="md" color="#26A69A" v-ripple
       style="top:70px; right: 20px" @click="annexBtn">
    </q-btn>
    <q-btn icon="save" class="absolute-bottom-right fab-icon cursor-pointer material-icons-round"
      @click="saveNotesHandler" style="bottom: 200px;right: 20px" dense flat round size="md" color="#26A69A" v-ripple
      title="保存" key="save" />
    <q-btn icon="dashboard" dense flat round class="absolute-bottom-right fab-icon cursor-pointer material-icons-round"
      style="bottom: 150px;right: 20px;" size="md" color="#26A69A" v-ripple key="wordCount">
      <q-tooltip transition-show="fade" transition-hide="fade" anchor="center left" self="center right">
        <div class="text-body2">
          <p>
            {{ '词:1333' }}
          </p>
          <p>
            {{ '字符:233' }}
          </p>
          <p>
            {{ '段落:33' }}
          </p>
        </div>
      </q-tooltip>
    </q-btn>
    <q-btn :icon="isSourceMode ? 'assignment' : 'code'" dense flat round
      class="absolute-bottom-right fab-icon cursor-pointer material-icons-round" style="bottom: 100px; right: 20px"
      size="md" color="#26A69A" v-ripple key="source_code" :title="!isSourceMode ? '源代码模式' : '预览模式'" @click="changeMode">
    </q-btn>
    <q-btn :icon='enablePreviewEditor ? "lock_open" : "lock"' dense flat round
      class='absolute-bottom-right fab-icon cursor-pointer material-icons-round' style='bottom: 50px;right: 20px;'
      @click='lockModeHandler' size='md' color='#26A69A' v-ripple key='lock'
      :title="enablePreviewEditor ? '锁定笔记' : '解锁笔记'" />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const {
  mapState: mapSettingState,
  mapActions: mapSettingActions
} = createNamespacedHelpers('setting')
export default {
  name: 'RightBtnList',
  data() {
    return {
    }
  },
  computed: {
    ...mapSettingState(['toggleLeftDrawer', 'tabaListShow', 'isAnnexShow',
    'isSideBarShow', 'isSourceMode', 'enablePreviewEditor'])
  },
  methods: {
    // 切换预览模式
    changeMode: function () {
      this.$store.commit('setting/click_tab_right_mode', !this.isSourceMode)
      console.log(222);
      // bus.$on('muyaData', (params)=>{
      //   console.log(params);
      //   this.
      // })

    },
    // 切换右侧目录窗口
    noteBtn: function () {
      if (this.isSideBarShow) {
        if (this.tabaListShow) {
          this.$store.commit("setting/taba_list_show", !this.tabaListShow);
          this.$store.commit("setting/click_toggle_left_drawer", true);
        } else {
          this.$store.commit("setting/taba_list_show", !this.tabaListShow);
          this.$store.commit("setting/click_toggle_left_drawer", !this.toggleLeftDrawer);
        }
      } else {
        this.$store.commit("setting/click_toggle_left_drawer", !this.toggleLeftDrawer);
        this.$store.commit("setting/taba_list_show", false);

      }
    },
    annexBtn(){
      this.$store.commit("setting/click_annex_show", !this.isAnnexShow);

    },
    //锁定切换
    lockModeHandler: function () {
      this.$store.commit('setting/click_enable_preview_editor', !this.enablePreviewEditor)
      this.$q.notify({
        color: 'primary',
        icon: 'info',
        message: this.enablePreviewEditor ? this.$t('lockModeOff') : this.$t('lockModeOn')
      })
    },
    // 保存
    saveNotesHandler() {
      this.$q.notify({
        color: 'primary',
        icon: 'info',
        message: '笔记已保存'
      })
    }
  }
}


</script>
