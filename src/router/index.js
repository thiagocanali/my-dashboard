import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'

const router = createRouter({
  // O base deve ser igual ao do vite.config.js para o GH Pages funcionar
  history: createWebHistory('/my-dashboard/'),
  routes
})

export default router