import Vue from 'vue'
import Router from 'vue-router'
import IntroPage from '@/components/IntroPage'
import Engineering from '@/components/Engineering'
import Mountaineering from '@/components/Mountaineering'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IntroPage',
      component: IntroPage
    },
    {
      path: '/Engineering',
      name: 'Engineering',
      component: Engineering
    },
    {
      path: '/Mountaineering',
      name: 'Mountaineering',
      component: Mountaineering
    },
  ] 
})
