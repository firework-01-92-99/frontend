import { createRouter, createWebHistory } from 'vue-router'
import JobPage from '../views/JobPage.vue'
import JobDetail from '../views/JobDetail.vue'
import JobApp from '../views/JobApp.vue'

const routes = [
  {
    path: '/',
    name: 'JobPage',
    component: JobPage
  },
  {
    path: '/detail',
    name: 'JobDetail',
    component: JobDetail
  },
  {
    path: '/application',
    name: 'JobApp',
    component: JobApp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
