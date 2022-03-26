import { createRouter, createWebHistory } from 'vue-router'
import JobPage from '../views/JobPage.vue'
import JobDetail from '../views/JobDetail.vue'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
