import Vue from 'vue'
import Router from 'vue-router'
import YoutubeSampler from '@/components/YoutubeSampler'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YoutubeSampler',
      component: YoutubeSampler
    }
  ]
})
