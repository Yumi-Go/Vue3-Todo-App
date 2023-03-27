import { createRouter, createWebHistory } from 'vue-router'

import AllTasks from '../components/AllTasks.vue'
import Bookmarked from '../components/Bookmarked.vue'

const routes = [
    { path: '/home', component: Home},
    { path: '/all_tasks', component: AllTasks},
    { path: '/bookmarked', component: Bookmarked},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }