import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import All from '@/components/all/all'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/all',
      name: 'All',
      component: All
    }
  ]
})
