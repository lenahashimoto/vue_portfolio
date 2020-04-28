import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navigation from './components/Navigation.vue'
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false
Vue.component('Navigation', Navigation)
Vue.use(VuePageTransition)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
