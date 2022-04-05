import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'


const app = createApp(App).use(router).use(VueAxios, axios).use(store)
app.mount('#app')
