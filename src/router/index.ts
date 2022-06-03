import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "../layout/index.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/table/table.vue'),
                name: 'Dashboard',
                meta: {
                    title: 'dashboard',
                    icon: '#icondashboard',
                    affix: true
                }
            }
        ]
    }
]

const router = createRouter({
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由
    history: createWebHistory(),
    routes
})

export default router
