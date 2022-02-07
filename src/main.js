import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    apiUrl: process.env.API_URL
  }
})

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')
