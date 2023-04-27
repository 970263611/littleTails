<template>
  <!-- 自动保存 -->
  <div>
    <q-dialog v-model="autoSaveVisible" ref="autoSaveVisibleRef" transition-show="fade" transition-hide="fade"
      class="base-dialog autoSaveVisibleRef">
      <q-card style="min-width: 460px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">自动保存设置</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-item>
            <q-item-section avatar>
              <q-icon name="timer" />
            </q-item-section>
            <q-item-section>
              <q-slider v-model="autoSaveGap" :min="10" :max="300" :step="10" label :label-value="autoSaveGap + '秒'"
                />
            </q-item-section>
          </q-item>
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
      autoSaveVisible: false,
      autoSaveGap: 20
    }
  },
  created() {

  },
  methods: {
    showDialog() {
      this.autoSaveVisible = true
    }
  }
}
</script>
<style scoped lang="scss"></style>