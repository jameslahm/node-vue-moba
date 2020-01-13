import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/iconfonts/iconfont.css'
import './assets/scss/style.scss'

Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)

import Card from '../src/components/Card'
Vue.component('m-card', Card)

import ListCard from '../src/components/ListCard'
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
	baseURL: process.env.VUE_APP_API_URL || '/web/api'
})

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
