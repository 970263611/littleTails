<template>
  <!-- 新建笔记 -->
  <div>
    <q-dialog v-model="addfileVisible" ref="addfileVisibleRef" transition-show="fade" transition-hide="fade"
      class="base-dialog addfileVisibleRef">
      <q-card style="min-width: 460px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">新建笔记</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-input v-model="fileName" label="标题" />
          <q-select v-model="fileSrc" :options="options" label="文件夹" />
          <q-btn @click="toEditFile" color="primary" class="absolute-bottom-left" size='md' style="bottom:-40px;left: 18px;">编辑文件夹</q-btn>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="确认" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="editfileVisible" ref="editfileVisibleRef" transition-show="fade" transition-hide="fade"
      class="base-dialog editfileVisibleRef">
      <q-card style="min-width: 460px;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">编辑文件夹</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          <div class="q-gutter-sm row justify-end">
            <q-btn size='md' @click="addFile" color="white" text-color="black">新增
              <q-popup-edit v-model="newFileName" buttons v-slot="scope" label-cancel="取消" label-set="确认">
                <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
              </q-popup-edit>
            </q-btn>
            <q-btn size='md' @click="editFile" color="primary">修改
              <q-popup-edit v-model="fileType" buttons v-slot="scope" label-cancel="取消" label-set="确认">
                <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
              </q-popup-edit>
            </q-btn>
            <q-btn size='md' @click="delFile" color="deep-orange">删除</q-btn>
          </div>
          <div class="q-pa-md editfile_content">
            <q-option-group :options="options" type="radio" v-model="fileType" />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="取消" v-close-popup />
          <!-- <q-btn flat label="确认" v-close-popup /> -->
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      addfileVisible: false,
      editfileVisible: false,
      fileName: '',
      fileSrc: '',
      options: [
        { label: "文件夹1", value: "文件夹1" },
        { label: "文件夹2", value: "文件夹2" },
        { label: "文件夹3", value: "文件夹3" },
      ],
      fileType: '',
      newFileName: '',
      editFileName: ''
    }
  },
  created() {

  },
  methods: {
    showDialog() {
      this.addfileVisible = true
    },
    toEditFile() {
      this.editfileVisible = true
    },
    addFile() {

    },
    editFile() {

    },
    delFile() {

    }
  }
}
</script>
<style scoped lang="scss">
.editfile_content {
  // border: 1px solid #eee;
}
</style>