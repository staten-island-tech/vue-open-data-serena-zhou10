import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import SquirrelData from '../components/SquirrelData.vue'
import BarChart from '../components/BarChart.vue'
import PieChart from '../components/PieChart.vue'
import FilterChart from '../components/SquirrelFilter.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/vue-lists',
    component: SquirrelData,
  },
  {
    path: '/vue-chart',
    component: BarChart,
  },
  {
    path: '/vue-pie',
    component: PieChart,
  },
  {
    path: '/vue-filter',
    component: FilterChart,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
