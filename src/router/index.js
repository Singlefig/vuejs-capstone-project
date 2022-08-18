import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharactersView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/characters/',
    name: 'CharacterDetails',
    component: CharactersView,
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
