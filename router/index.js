export default new Router({
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/pages/index.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login.vue')
      },
      {
        path: '/certificate',
        name: 'certificate',
        component: () => import('@/pages/certificate.vue')
      }
    ]
  });
  