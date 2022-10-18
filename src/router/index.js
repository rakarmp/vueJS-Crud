import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import('../views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import('../views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import('../views/post/Edit.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;