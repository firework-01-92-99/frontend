import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/tailwind.css'
import BaseButton from './components/BaseButton.vue'


const app = createApp(App).use(router).use(VueAxios, axios).use(store)
app.component('base-button', BaseButton)
app.mount('#app')
