import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Sample from '../views/Sample.vue'
import Works from '../views/Works.vue'
import EachWork from '../views/EachWork.vue'
import Work01 from '../views/Work01.vue'
import Work02 from '../views/Work02.vue'

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
    path: '/sample',
    name: 'Sample',
    component: Sample
  },
  {
    path: '/works', redirect: { name: 'index' },
    name: 'Works',
    component: Works
  },
  {
    path: '/works/index',
    name: 'WorksIndex',
    component: Works,
    props: true,
    children: [
      { path: '', component: EachWork, name: "index" },
      { path: '01', component: Work01, name: "works-01" },
      { path: '02', component: Work02, name: "works-02" }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
