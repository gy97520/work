import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
mode: 'history',
  routes: [

    {
      path: '/vindex',
      component: resolve => require(['@/components/vindex'], resolve),

    },

    {
      path: '/',
      component: resolve => require(['@/components/common/static_home'], resolve),

      children:[
        {
          path: '/regist',
          component: resolve => require(['@/components/regist'], resolve),

        },
        {
          path: '/',
          component: resolve => require(['@/components/comIndex'], resolve),

        },

      ]
    },

    {
      path: '/vfooter',
      component: resolve => require(['@/components/common/vfooter'], resolve),
    },
    {
      path: '/login',
      component: resolve => require(['@/components/login'], resolve),
    },

    {
      path: '/solid',
      component: resolve => require(['@/components/solid'], resolve),
    },
    {
      path: '/film',
      component: resolve => require(['@/components/film'], resolve),
    },
    {
      path: '/home',
      component: resolve => require(['@/components/home'], resolve),
    },

  ]
})
