const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../pages/xDashboard.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../pages/xProduct.vue')
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../pages/xCustomer.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../pages/xProfile.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../pages/xSettings.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/xContact.vue')
  }
]

export default routes