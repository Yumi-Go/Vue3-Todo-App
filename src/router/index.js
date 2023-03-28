import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'

const routes = [
    {
        path: '/',
        name: Home,
        component: () => import('../views/Home.vue')
    },
    {
        path: '/all',
        name: AllTasks,
        component: () => import('../components/AllTasks.vue')

    },
    {
        path: '/bookmarked',
        name: Bookmarked,
        component: () => import('../components/Bookmarked.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }