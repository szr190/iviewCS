import Vue from 'vue'
import Router from 'vue-router'
import Btn from './views/Btn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'btn',
      component: Btn
    },
    {
      path: '/btn',
      name: 'btn',
      component: Btn
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('./views/Icon.vue')
    },
    {
      path: '/grid',
      name: 'grid',
      component: () => import('./views/Grid.vue')
    }
  ]
})
