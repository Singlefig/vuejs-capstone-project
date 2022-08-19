import { createRouter, createWebHistory } from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import CharacterDetails from '../views/CharacterDetails.vue'
import FavouriteCharacters from '../views/FavouriteCharacters.vue'

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharactersView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: CharacterDetails,
    props: true,
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouriteCharacters,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
