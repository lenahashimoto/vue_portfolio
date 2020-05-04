import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Works from '../views/Works.vue'
import Work01 from '../views/Work01.vue'
import Work02 from '../views/Work02.vue'
import Work03 from '../views/Work03.vue'
import Work04 from '../views/Work04.vue'
import Work05 from '../views/Work05.vue'
import Work06 from '../views/Work06.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/works', 
    redirect: { name: "work-01" }
  },
  {
    path: '/works/:id',
    name: 'WorksIndex',
    component: Works,
    props: true,
    children: [
      { path: '01', component: Work01, name: "work-01" },
      { path: '02', component: Work02, name: "work-02" },
      { path: '03', component: Work03, name: "work-03" },
      { path: '04', component: Work04, name: "work-04" },
      { path: '05', component: Work05, name: "work-05" },
      { path: '06', component: Work06, name: "work-06" }      
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
