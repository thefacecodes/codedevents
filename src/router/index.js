import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import MovieDetails from '../views/MovieDetails.vue'
import SearchMovie from '../views/SearchMovie.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchMovie
  },
  {
    path: '/popular',
    name: 'popular',
    // route level code-splitting
    // this generates a separate chunk (popular.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "popular" */ '../views/PopularView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
