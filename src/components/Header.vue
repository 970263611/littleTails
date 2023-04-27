<template>
  <div>
    <q-header class="header bg-black">
      <!-- 3333 -->
      <div class="text-grey show-left">
        <q-btn icon='pageview' dense flat round class='fab-icon cursor-pointer material-icons-round ' size='md'
          color='#26A69A' v-ripple @click="showAndHideSearch" />
        <q-btn dense flat round class='fab-icon cursor-pointer material-icons-round' size='md' color='#26A69A' v-ripple
          @click="showAndHide">
          开关
        </q-btn>
        <q-btn icon='' dense flat round class='fab-icon cursor-pointer material-icons-round' size='md' color='#26A69A'
          v-ripple @click="$refs.ImportDialog.toggle()">
          导入
        </q-btn>
        <q-btn icon='' dense flat round class='fab-icon cursor-pointer material-icons-round' size='md' color='#26A69A'
          v-ripple @click="showAutoSave">
          自动保存
        </q-btn>
        <q-btn icon='' dense flat round class='fab-icon cursor-pointer material-icons-round' size='md' color='#26A69A'
          v-ripple @click="showSync">
          同步
        </q-btn>
      </div>

      <div class="text-grey show-hide">

        <!-- <div>{{ store.counter  }} {{counter }}</div> -->
        <q-btn icon='settings' dense flat round class='fab-icon cursor-pointer material-icons-round' size='md'
          color='#26A69A' v-ripple @click="showSetting" />
      </div>
    </q-header>
    <ImportDialog ref="ImportDialog"></ImportDialog>
    <AutoSaveDialog ref="autoSaveVisibleRef"></AutoSaveDialog>
    <SettingsDialog ref="settingsVisibleRef"></SettingsDialog>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { getUserInfo } from 'src/api/setting'
import ImportDialog from './dialog/ImportDialog.vue'
import AutoSaveDialog from './dialog/AutoSaveDialog.vue'
import SettingsDialog from './dialog/SettingsDialog.vue'
const {
  mapState: mapSettingState,
  mapActions: mapSettingActions
} = createNamespacedHelpers('setting')
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: { ImportDialog, AutoSaveDialog, SettingsDialog },
  computed: {
    ...mapSettingState(["isSideBarShow", "isShowSearch", "toggleLeftDrawer", 'tabaListShow'])
  },
  created() {
    this.getUserInfoData();
  },
  methods: {
    showAndHide: function () {
      if (this.toggleLeftDrawer) {
        this.$store.commit("setting/taba_list_show", !this.tabaListShow);
      } else {
        this.$store.commit("setting/click_tabs_side", !this.isSideBarShow);
        this.$store.commit("setting/taba_list_show", true);
      }
    },
    async getUserInfoData() {
      await getUserInfo("/list/risk").then(res => {
        console.log(res);
      });
    },
    showAndHideSearch() {
      this.$store.commit("setting/click_toogle_search", !this.isShowSearch);
    },
    showAutoSave() {
      this.$refs.autoSaveVisibleRef.showDialog()
    },
    showSync() {
    },
    showSetting() {
      this.$refs.settingsVisibleRef.showDialog()
    }
  },
}
</script>
<style scoped lang="scss">
.show-left {
  float: left;
  padding: 0 20px;
  margin: 10px 0;
}

.show-hide {
  float: right;
  padding: 0 20px;
  margin: 10px 0;

}
</style>
