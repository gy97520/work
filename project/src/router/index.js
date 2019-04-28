import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
mode: 'history',
  routes: [
    {
      path: '/',
      name:"index",
      component: resolve => require(['@/components/index'], resolve),
    },
    {
      path: '/header',
      name:"header",
      component: resolve => require(['@/components/common/header'], resolve),
    },
    {
      path: '/sheader',
      name:"sheader",
      component: resolve => require(['@/components/common/sheader'], resolve),
    },
    {
      path: '/nav',
      name:"nav",
      component: resolve => require(['@/components/common/nav'], resolve),
         children:[

           {
            path: '/companyProfile',
            name:"companyProfile",
            component: resolve => require(['@/components/companyProfile'], resolve),
            },
           {
            path: '/companyCulture',
            name:"companyCulture",
            component: resolve => require(['@/components/companyCulture'], resolve),
            },
           {
            path: '/organizationChart',
            name:"organizationChart",
            component: resolve => require(['@/components/organizationChart'], resolve),
            },
           {
            path: '/enterpriseQualification',
            name:"enterpriseQualification",
            component: resolve => require(['@/components/enterpriseQualification'], resolve),
            },
           {
             path: '/managementTeam',
             name:"managementTeam",
             component: resolve => require(['@/components/managementTeam'], resolve),
            },
           {
             path: '/teamStyle',
             name:"teamStyle",
             component: resolve => require(['@/components/teamStyle'], resolve),

            },
           {
             path: '/businessArea',
             name:"businessArea",
             component: resolve => require(['@/components/businessArea'], resolve),

            },
            {
              path: '/projectResult',
              name:"projectResult",
              component: resolve => require(['@/components/projectResult'], resolve),
             },
            {
              path: '/productShow',
              name:"productShow",
              component: resolve => require(['@/components/productShow'], resolve),
            },
           {
              path: '/solution',
              name:"team style",
              component: resolve => require(['@/components/solution'], resolve),
            },
            {
              path: '/employ',
              name:"employ",
              component: resolve => require(['@/components/employ'], resolve),
           },
      ]
    },
    {
      path: '/moreNews',
      component: resolve => require(['@/components/moreNews'], resolve),

    },
    {
      path: '/oneNew',
      name:"oneNew",
      component: resolve => require(['@/components/news/oneNew'], resolve),
    },
    {
      path: '/contact',
      component: resolve => require(['@/components/contact'], resolve),

    },
      ]
})
