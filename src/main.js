// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.config.productionTip = true

Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return this.$root.bus
  }
})

const bus = new Vue({})

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  data: {
    bus
  },
  template: '<App/>',
  components: { App }
})
