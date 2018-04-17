import '../src/styles/reset.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Noob from '../src'


Vue.use(Noob)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
