import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Navigation from './components/Navigation.vue'
import VuePageTransition from 'vue-page-transition'
import VueScrollTo from 'vue-scrollto'

Vue.config.productionTip = false
Vue.component('Navigation', Navigation)
Vue.use(VuePageTransition)
Vue.use(VueScrollTo)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
