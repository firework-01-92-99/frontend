import Vue from 'vue'
import VueRouter from 'vue-router'
import JobPage from '../views/JobPage.vue'
import JobDetail from '../views/JobDetail.vue'
import JobApp from '../views/JobApp.vue'
import SignIn from '../views/SignIn.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SignUp from '../views/SignUp.vue'
import ApproveAccPage from '../views/ApproveAccPage.vue'
import ConfirmPage from '../views/ConfirmPage.vue'
import DelAccPage from '../views/DelAccPage.vue'
import EditAccPage from '../views/EditAccPage.vue'

Vue.use(VueRouter)

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
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Home'
    //     })
    //   }
    //   next()
    // }
  },
  {
    path: '/signup/:signType',
    name: 'SignUp',
    component: SignUp,
    props: true,
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'Home'
    //     })
    //   }
    //   next()
    // }
  },
  {
    path: '/approve',
    name: 'ApproveAccPage',
    component: ApproveAccPage
  },
  {
    path: '/approve/delete',
    name: 'DelAccPage',
    component: DelAccPage
  },
  {
    path: '/approve/edit',
    name: 'EditAccPage',
    component: EditAccPage
  },
  {
    path: '/confirm',
    name: 'ConfirmPage',
    component: ConfirmPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
