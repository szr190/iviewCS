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
      path: '/grid_base',
      name: 'grid_base',
      component: () => import('./views/Grid-base.vue')
    },
    {
      path: '/grid_flex',
      name: 'grid_flex',
      component: () => import('./views/Grid-flex.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/Card.vue')
    }
  ]
})
