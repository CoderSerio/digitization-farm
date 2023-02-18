import { VueElement } from 'vue'
// vue-router自己提供的
import { createRouter, createWebHistory } from 'vue-router'
import { Route } from '@type/mock'

const routes = [
  {
    path: '/',
    name: 'DataList',
    component: () =>
      import(/* webpackChunkName: "data-list" */ '@page/DataList/index.vue')
  },
  {
    path: '/analyse',
    name: 'Analyse',
    component: () =>
      import(/* webpackChunkName: "about" */ '@page/Analyse/index.vue')
  },
  {
    path: '/warehouse',
    name: 'WareHouse',
    component: () =>
      import(/* webpackChunkName: "about" */ '@page/WareHouse/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
