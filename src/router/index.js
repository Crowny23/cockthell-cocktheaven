import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CocktHeavenView from '../views/CocktHeavenView.vue'
import CocktHellView from '../views/CocktHellView.vue'
import DrinkHellView from '../views/DrinkHellView.vue'
import SearchHellView from '../views/SearchHellView.vue'
import CategoryDrinkView from '../views/CategoryDrinkView.vue'
import CreateUser from '../components/CreateUser.vue'
import ConnectionUser from '../components/ConnectionUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cocktheaven',
    name: 'heavenhome',
    component: CocktHeavenView
  },
  {
    path: '/cockthell',
    name: 'hellhome',
    component: CocktHellView
  },
  {
    path: '/drink/:idDrink(\\d+)',
    name: 'drinkChoice',
    component: DrinkHellView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchHellView
  },
  {
    path: '/:ingcategory/:cat',
    name: 'category',
    component: CategoryDrinkView
  },
  {
    path: '/registration',
    name: 'register',
    component: CreateUser
  },
  {
    path: '/login',
    name: 'login',
    component: ConnectionUser
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
