import { createRouter, createWebHistory } from 'vue-router'
import SquirrelData from '../components/SquirrelData.vue'

const routes = [
    {
        path: '/vue-lists',
        component: SquirrelData,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router