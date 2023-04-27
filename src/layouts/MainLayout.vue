<template>
 <q-layout view="lHh Lpr lFf">
    <Header></Header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'MainLayout',
  components: {
    Header
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 6.5vh;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  // background: none !important;
}
</style>
