import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../App.vue')
    },
    {
        path: '/bookmarked',
        name: 'Bookmarked',
        component: () => import('../components/Bookmarked.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router }