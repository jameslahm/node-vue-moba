import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/iconfonts/iconfont.css'
import './assets/scss/style.scss'

Vue.config.productionTip = false

import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from '../src/components/Card'
Vue.component('m-card',Card)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
