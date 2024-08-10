import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFoud.vue'
import TopCenas from '@/views/TopCenas.vue'
import Videos from '@/views/Videos.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFound
    },

    {
      path: '/topcenas',
      name: 'topcenas',
      component: TopCenas
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    }
  ]
})

export default router
