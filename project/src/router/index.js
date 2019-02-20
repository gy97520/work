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
          path: '/moreNews',
          component: resolve => require(['@/components/moreNews'], resolve),

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

    {
      path: '/oneHeader',
      component: resolve => require(['@/components/common/oneHeader'], resolve),
      children:[


        {
          path: '/pr',
          component: resolve => require(['@/components/company profile'], resolve),

        },
        {
          path: '/cu',
          component: resolve => require(['@/components/company culture'], resolve),

        },
        {
          path: '/man',
          component: resolve => require(['@/components/Management team'], resolve),

        },
        {
          path: '/org',
          component: resolve => require(['@/components/organization chart'], resolve),

        },
        {
          path: '/team',
          component: resolve => require(['@/components/team style'], resolve),

        },

      ]

    },
    {
      path: '/twoHeader',
      component: resolve => require(['@/components/common/twoHeader'], resolve),
      children:[


        {
          path: '/bu',
          component: resolve => require(['@/components/businessArea'], resolve),

        },
        {
          path: '/result',
          component: resolve => require(['@/components/projectResult'], resolve),

        },
        {
          path: '/',
          component: resolve => require(['@/components/Management team'], resolve),

        },
        {
          path: '/solution',
          component: resolve => require(['@/components/solution'], resolve),
        },
        {
          path: '/',
          component: resolve => require(['@/components/team style'], resolve),

        },
      ]
    },
    {
      path: '/threeHeader',
      component: resolve => require(['@/components/common/threeHeader'], resolve),
      children:[


        {
          path: '/employ',
          component: resolve => require(['@/components/employ'], resolve),

        },

      ]
    }


      ]
})
