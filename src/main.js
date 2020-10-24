import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes  from './router/index.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')