import { createRouter, createWebHistory } from 'vue-router'

import routes from './routes'

const router = createRouter({
  history: createWebHistory('/my-dashboard/'),
  routes
})

export default router
