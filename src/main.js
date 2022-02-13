import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    notifications: [],
  },

  mutations: {
    addNotification(state, notification) {
      state.notifications.push(notification);
    },

    clearNotifications(state) {
      state.notifications = [];
    },

    clearNotification(state, notification) {
      state.notifications = state.notifications.filter(n => n !== notification);
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount('#app')
