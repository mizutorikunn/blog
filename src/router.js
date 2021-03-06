import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Daily from './views/Daily.vue'
import Technology from './views/Technology.vue';
import Tour from './views/Tour.vue';
import admPage from './views/Admin.vue';
import loginPage from './views/Login.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'home',
      component: Home
    }, {
      path: '/daily',
      name: 'daily',
      component: Daily
    }, {
      path: '/technology',
      name: 'technoloty',
      component: Technology
    },
    {
      path: '/tour',
      name: 'tour',
      component: Tour
    },
    {
      path:'/login',
      component:loginPage
    },
    {
      path: '/admCyjlogin',
      component: admPage
    },
  ]
})