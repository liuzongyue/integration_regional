import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/drapInfo',
    name: 'drapInfo',
    component: () => import("./../views/drapInfo/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./../views/loginPage/index.vue")
  },
  {
    path: "/task-distribution",
    name: "taskDistribution",
    redirect: "/task-distribution/page1",
    children: [
      {
        path: "/task-distribution/page1",
        name: "taskDistributionPage1",
        component: () => import("./../views/taskDistribution/index.vue")
      },
      {
        path: "/task-distribution/page2",
        name: "taskDistributionPage2",
        component: () => import("./../views/taskDistribution/index.vue")
      },
      {
        path: "/task-distribution/page3",
        name: "taskDistributionPage3",
        component: () => import("./../views/taskDistribution/index.vue")
      },
    ],
  },
  {
    path: '/page-menu',
    name: 'pageMenu',
    component: () => import("./../views/pageMenu/index"),
    redirect: "/page-menu/page1",
    children: [
      {
        path: "/page-menu/page1",
        name: 'page1',
        component: () => import("./../views/pageMenu/page1/index.vue")
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
