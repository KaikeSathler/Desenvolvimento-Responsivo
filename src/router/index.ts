import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFoud.vue'
import TopCenas from '@/views/TopCenas.vue'
import Videos from '@/views/Videos.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
