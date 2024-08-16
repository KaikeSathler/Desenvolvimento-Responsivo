import { createRouter , createWebHistory} from 'vue-router'

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue")
    },
    {
      path: '/topcenas',
      name: 'topcenas',
      component: () => import("../views/TopCenas.vue")
    },
    {
      path: '/videos',
      name: 'videos',
      component: () => import("../views/Videos.vue")
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import("../views/NotFoud.vue")
    }
  ]
})

export default router
