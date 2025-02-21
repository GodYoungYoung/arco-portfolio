import homePageRoutes from './homePageRoutes'
//系统路由
const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: 'dashboard',
    children: homePageRoutes
  },
  {
    name: 'portfolio',
    path: '/portfolio',
    component: () => import('@/views/portfolio/index.vue'),
    meta : { title: '个人作品合集' }
  },
  {
    name: 'visualscreen',
    path: '/vs/:name',
    meta: { title: '可视化大屏' },
    component: () => import('@/views/portfolio/vs.vue')
  },
  {
    name: 'workspace',
    path: '/ws/:name',
    meta: { title: '个人工作台' },
    component: () => import('@/views/portfolio/ws.vue')
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login.vue'),
    meta: { title: '登录' }
  },
  {
    path: '/:pathMatch(.*)*',
    hidden: true,
    meta: { title: '访问的页面不存在' },
    component: () => import('@/layout/404.vue')
  }
]

export default routes
