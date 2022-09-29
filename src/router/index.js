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
    component: () => import("./../views/taskDistribution/index.vue"),
    redirect: "/task-distribution/page1",
    children: [
      {
        path: "/task-distribution/page1",
        name: "taskDistributionPage1",
        component: () => import("./../views/taskDistribution/taskRight/my-work.vue"),
        Pname: "我的任务"
      },
      {
        path: "/task-distribution/page2",
        name: "taskDistributionPage2",
        component: () => import("./../views/taskDistribution/taskRight/job-manager.vue"),
        Pname: "职位管理"
      },
      {
        path: "/task-distribution/page3",
        name: "taskDistributionPage3",
        component: () => import("./../views/taskDistribution/taskRight/task-manager.vue"),
        Pname: "任务管理"
      },
      {
        path: "/task-distribution/page4",
        name: "taskDistributionPage4",
        component: () => import("./../views/taskDistribution/taskRight/file-manager.vue"),
        Pname: "文件管理",
      },
    ],
  },
  {
    path: '/page-menu',
    name: 'pageMenu',
    component: () => import("./../views/pageMenu/index"),
    redirect: "/page-menu/code-runing",
    children: [
      {
        path: "/page-menu/code-runing",
        name: 'codeRuning',
        component: () => import("./../views/pageMenu/code-runing/index.vue")
      },
      {
        path: "/page-menu/page2",
        name: 'page2',
        component: () => import("./../views/pageMenu/page2/index.vue")
      },
    ]
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404"),
    hidden: true
  },
  { path: "*", redirect: "/404" } // 添加
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// export default new VueRouter({
//   mode: "history",
//   routes
// });

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
