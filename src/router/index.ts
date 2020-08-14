import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
Vue.use(Router)
import Layout from '../layout/index'


// /**
//  * constantRoutes
//  * 没有权限要求的基本页面
//  * 所有角色都可以访问  */
export const constantRoutes: Array<RouteConfig> = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,   //控制是否需要显示在菜单栏
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
  },
  { //一级配置
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home'),
        name: 'index',
        meta: { title: '首页', icon: 'el-icon-house', affix: true }
      },
    ]
  },
  {  //一级配置
    path: '/personal',
    component: Layout,
    redirect: '/personal/centre',
    children: [
      {
        path:'centre',
        component: () => import('@/views/personalCentre/index'),
        name: 'centre',
        meta: {
          title: '个人中心',
          roles: ['admin'] ,
          icon: 'el-icon-user'
        }
      }
    ]
  },
  {  //二级配置
    path: '/blog',
    component: Layout,
    redirect: '/blog/blogcontent',
    alwaysShow: true,
    name: 'blog',
    meta: {
      title: '博客管理',
      icon: 'el-icon-tickets',
      roles: ['admin', 'editor']   //权限
    },
    children: [
      {
        path: 'blogcontent',
        component: () => import('@/views/blogManagement/blogcontent'),
        name: 'blogcontent',
        meta: {
          title: '内容管理',
          roles: ['admin'] 
        }
      }
    ]
  },
  {//二级配置
    path: '/operations',
    component: Layout,
    redirect: '/operations/operationscontent',
    alwaysShow: true,  //是否二级
    name: 'operations',
    meta: {
      title: '运营管理',
      icon: 'el-icon-edit-outline',
      roles: ['admin', 'editor'] 
    },
    children: [
      {
        path: 'operationscontent',
        component: () => import('@/views/operationsManagement/operationscontent'),
        name: 'operationscontent',
        meta: {
          title: '人员管理',
          roles: ['admin'] 
        }
      }
    ]
  }
]


// /**
//  * asyncRoutes
//  * 需要根据用户角色动态加载的路由
//  */
export const asyncRoutes: Array<RouteConfig> = [
]


const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
})

const router = createRouter()

export default router
