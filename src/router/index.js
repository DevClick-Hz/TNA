import Vue from 'vue'
import VueRouter from 'vue-router'
import News from '../views/News.vue'
import topArticles from '../views/topArticles.vue'
import topStories from '../views/topStories.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/topArticles',
    name: 'topArticles',
    component: topArticles
  },
  {
    path: '/topStories',
    name: 'topStories',
    component: topStories
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
