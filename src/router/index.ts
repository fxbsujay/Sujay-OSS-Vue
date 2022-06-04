import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "../layout/index.vue"

/**
 * <p>路由</p>
 * @author fxbsujay@gmail.com
 * @version 13:24 2022/6/3
 */
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
    history: createWebHistory(),
    routes
})

export default router
