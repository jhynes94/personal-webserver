import Vue from 'vue'
import Router from 'vue-router'
import EngineerOrMountaineer from '@/components/EngineerOrMountaineer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EngineerOrMountaineer',
      component: EngineerOrMountaineer
    },
  ] 
})
