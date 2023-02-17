import { VueElement } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

interface Route {
  path: string
  name: string
  component: VueElement | (() => Promise<any>)
}

const routes: Array<Route> = [
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
