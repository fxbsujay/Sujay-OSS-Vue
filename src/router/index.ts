import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from "../layout/index.vue"

/**
 * <p>路由</p>
 * @author fxbsujay@gmail.com
 * @version 13:24 2022/6/3
 */
const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    }
]

const moduleRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/file',
        meta: {
            title: '首页',
            icon: '#icondashboard',
            affix: true
        },
        children: [
            {
                path: 'file',
                component: () => import('../views/room/index'),
                name: 'Home',
                meta: {
                    title: '首页',
                    icon: '#icondashboard',
                    affix: true
                }
            }
        ]
    }
]



const routes: Array<RouteRecordRaw> = [
    ...constantRoutes,
    ...moduleRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

const filterAsyncRoutes = (routes: RouteRecordRaw[]) => {
    const res: RouteRecordRaw[] = []
    routes.forEach(route => {
        const r = { ...route }
        if (r.children) {
            r.children = filterAsyncRoutes(r.children)
        }
        res.push(r)

    })
    return res
}

export const AsyncRoutes = filterAsyncRoutes(moduleRoutes)
