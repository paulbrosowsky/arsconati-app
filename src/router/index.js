import { createRouter, createWebHistory } from 'vue-router'
import ArtView from '@/views/ArtView.vue'
import HistoryView from '@/views/HistoryView.vue'
import SearchView from '@/views/SearchView.vue'
import HomeView from '@/views/HomeView.vue'
import ExhibitView from '@/views/ExhibitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
    },
    {
      path: '/art',
      name: 'art',
      component: ArtView,
    },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: SearchView,
    // },
    {
      path: '/exhibit/:id',
      name: 'exhibit',
      component: ExhibitView,
    },
  ],
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router
