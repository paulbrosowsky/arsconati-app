import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import GuideView from '@/views/GuideView.vue'
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
      path: '/guide',
      name: 'guide',
      component: GuideView,
      // redirect: { name: 'section', params: { id: 1 } },
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/welcome',
      name: 'about',
      component: WelcomeView,
    },
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
