/* import Vue from 'vue'
import VueRouter from 'vue-router'
 */

import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import part from '../views/part.vue'
import gart from '../views/gart.vue'
import merci from '../views/merci.vue'

/* Vue.use(VueRouter) */

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'slide-fade-down' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { transition: 'slide-left' }
  },
  {
    path: '/part',
    name: 'part',
    component: part,
    meta: { transition: 'slide-down' }
  },
  {
    path: '/gart',
    name: 'gart',
    component: gart,
    meta: { transition: 'grow-in' }
  },
  {
    path: '/merci',
    name: 'merci',
    component: merci,
    meta: { transition: 'grow-out' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
