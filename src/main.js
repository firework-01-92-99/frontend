import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'
import BaseButton from './components/BaseButton.vue'
import './store/subscriber'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import CKEditor from '@ckeditor/ckeditor5-vue2';
import VueOtp2 from 'vue-otp-2';

Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
new Vue({
  router,
  VueAxios,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
})

Vue.component('base-button', BaseButton)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use( CKEditor )
Vue.use(VueOtp2)