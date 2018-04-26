// import '../src/styles/index.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import NoobUI from '../src/index'

Vue.use(NoobUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
