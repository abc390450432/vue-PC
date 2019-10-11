import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect:'/Home/article01'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        // {
        //   path: '/',
        //   redirect: '/Home/article1'          
        // },
        { 
          path: '/Home/article01',
          name: 'article01', 
          component: () => import('./views/article/article01.vue')
        },
        { 
          path: '/Home/article02',
          name: 'article02', 
          component: () => import('./views/article/article02.vue')
        },
      ]
    },
  ]
})
