<template>
  <q-dialog transition-show='fade' transition-hide='fade' ref="ImportDialog">
    <q-card>
      <q-uploader ref='uploader' :label="$t('restrictedToMarkdown')" multiple accept=".md" flat :factory="factoryFn"/>
      <q-card-actions align="right">
        <q-btn flat label="取消" color="primary" v-close-popup />
        <q-btn flat label="上传" color="primary" @click='$refs.uploader.upload()' />
      </q-card-actions>
      </q-card>
  </q-dialog>
</template>
<script>
// import { createNamespacedHelpers } from 'vuex'
import { Notify } from 'quasar'
// const { mapActions } = createNamespacedHelpers('server')
export default {
  name: 'ImportDialog',
  methods: {
    // ...mapActions(['importNote']),
    toggle: function () {
      return this.$refs.ImportDialog.toggle()
    },
    factoryFn (files) {
      files.forEach(file => {
        console.log(file);
        // try {
        //   this.importNote(file)
        //   Notify.create({
        //     color: 'primary',
        //     icon: 'check',
        //     message: this.$t('uploadNoteSuccessfully')
        //   })
        //   this.$refs.uploader.reset()
        // } catch (e) {
        //   Notify.create({
        //     color: 'red-10',
        //     icon: 'error',
        //     message: this.$t('uploadNoteError')
        //   })
        // }
      })
    }
  }
}
</script>
