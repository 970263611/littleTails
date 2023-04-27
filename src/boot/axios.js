// import Vue from 'vue'
// import axios from 'axios'

// Vue.prototype.$axios = axios
import { boot } from 'quasar/wrappers'
import axios from 'axios'
console.log(process.env);
const api = axios.create({
  baseURL: process.env.API,
  timeout: 40000,
  withCredentials: false
})

export default boot(({ app, router, store }) => {
  // const userStore = useUserStore()
  api.interceptors.request.use(request => {
      // const token = userStore.GetToken()
      request.headers = {
          'Content-Type': 'application/json;charset=utf-8',
          // 'Gqa-Token': token,
          // 'Gqa-Lang': Cookies.get("gqa-language") || "zh-CN"
      }

      /* 👇demo mode👇 */
      // if (forbiddenUrl.some(item => item === request.url)) {
      //     Notify.create({
      //         type: 'negative',
      //         message: i18n.global.t('DemoMode')
      //     })
      //     return
      // }
      /* 👆demo mode👆 */

      return request
  }, error => {
      Notify.create({
          type: 'negative',
          message: error,
      })
      return Promise.reject(error)
  })

  api.interceptors.response.use(response => {
      // If the ExpiresAt of the JWT has expired,
      // but the RefreshAt has not expired, 
      // the background will insert a Gqa Refresh Token in the headers, 
      // which will be saved here to form a token replacement logic
      // if (response.headers['gqa-refresh-token'] && response.data.data.refresh) {
      //     userStore.SetToken(response.headers['gqa-refresh-token'])
      //     // store.dispatch('user/SetToken', response.headers['gqa-refresh-token'])
      //     Notify.create({
      //         type: 'positive',
      //         message: i18n.global.t('Refresh') + 'Token' + i18n.global.t('Success'),
      //     })
      //     return api(response.config)
      // }
      // const responseData = response.data
      // const { code } = responseData

          return response.data
    
  }, error => {
      // // 500
      // if (error + '' === 'Error: Request failed with status code 500') {
      //     Dialog.create({
      //         title: i18n.global.t('Error'),
      //         message: i18n.global.t('Data') + i18n.global.t('Exception') + ',' + i18n.global.t('Please') + i18n.global.t('Relogin'),
      //         persistent: true,
      //         ok: {
      //             push: true,
      //             color: 'negative',
      //             label: i18n.global.t('Logout')
      //         },
      //     }).onOk(() => {
      //         userStore.HandleLogout()
      //         router.push({ name: 'login' })
      //     })
      // }
      // // timeout
      // if (error + '' === 'Error: timeout of 40000ms exceeded') {
      //     Notify.create({
      //         type: 'negative',
      //         message: i18n.global.t('Operation') + i18n.global.t('Timeout')
      //     })
      // }
      // // network error
      // if (error + '' === 'Error: Network Error') {
      //     router.push({ name: 'notFound' })
      // } else if (error.response && error.response.status === 404) {
      //     Notify.create({
      //         type: 'negative',
      //         message: i18n.global.t('Request') + i18n.global.t('Address') + i18n.global.t('NotFound') + ' ' + error.response.request.responseURL,
      //     })
      // }
      return Promise.reject(error)
  })
  // for use inside Vue files (Options API) through this.$axios and this.$api

  // app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  // app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }