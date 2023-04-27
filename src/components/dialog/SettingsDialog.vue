<template>
  <!-- 自动保存 -->
  <div>
    <q-dialog v-model="settingsVisible" ref="settingsVisibleRef" transition-show="fade" transition-hide="fade"
      class="base-dialog settingsVisibleRef">
      <q-card style="min-width: 460px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">设置</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          设置
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="确认" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      settingsVisible: false,
    }
  },
  created() {

  },
  methods: {
    showDialog() {
      this.settingsVisible = true
    }
  }
}
</script>
<style scoped lang="scss"></style>