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
import PostingPage from '../views/PostingPage.vue'
import ViewWorkApp from '../views/ViewWorkApp.vue'
import AddPosting from '../views/AddPosting.vue'
import OtpPage from '../views/OtpPage.vue'
import PageNotFound from '../views/PageNotFound.vue'
import ForgotPass from '../views/ForgotPass.vue'
import EditPosting from '../views/EditPosting.vue'
import EditProfileEmp from '../views/EditProfileEmp.vue'
import AllEmpView from '../views/AllEmpView.vue'
import AllJobInEmp from '../views/AllJobInEmp.vue'
import EditProfileWorker from '../views/EditProfileWorker.vue'
// import store from '@/store'

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
    // beforeEnter: (to, from, next) => {
    //   if (store.getters['auth/authenticated']) {
    //     return next({
    //       name: 'JobPage'
    //     })
    //   }
    //   next()
    // }
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
  {
    path: '/posting',
    name: 'PostingPage',
    component: PostingPage
  },
  {
    path: '/viewworkapp',
    name: 'ViewWorkApp',
    component: ViewWorkApp
  },
  {
    path: '/addPost',
    name: 'AddPosting',
    component: AddPosting
  },
  {
    path: '/otp',
    name: 'OtpPage',
    component: OtpPage,
  },
  {
    path: '/forgetPass',
    name: 'ForgotPass',
    component: ForgotPass,
  },
  {
    path: '/editPost',
    name: 'EditPosting',
    component: EditPosting,
  },
  {
    path: '/editProfile/emp',
    name: 'EditProfileEmp',
    component: EditProfileEmp,
  },
  {
    path: '/editProfile/worker',
    name: 'EditProfileWorker',
    component: EditProfileWorker,
  },
  {
    path: '/allEmployer',
    name: 'AllEmpView',
    component: AllEmpView,
  },
  {
    path: '/jobOfThisEmp',
    name: 'AllJobInEmp',
    component: AllJobInEmp,
  },  
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
