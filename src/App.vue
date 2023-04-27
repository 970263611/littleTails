<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
.q-field--dense .q-field__marginal{
  height: 30px!important;
}

.q-field--auto-height.q-field--dense .q-field__control, .q-field--auto-height.q-field--dense .q-field__native{
  min-height: 30px!important;

}
</style>
