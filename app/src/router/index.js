import { createRouter, createWebHistory } from 'vue-router'
import SquirrelData from '../components/SquirrelData.vue'
import BarChart from '../components/BarChart.vue'

const routes = [
  {
    path: '/',
    redirect: '/vue-chart',
  },
  {
    path: '/vue-lists',
    component: SquirrelData,
  },
  {
    path: '/vue-chart',
    component: BarChart,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router