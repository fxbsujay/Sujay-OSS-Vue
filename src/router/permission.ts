import router from './index'
import store from "../store";
import { getToken } from '../utils/cookies'
const whiteList: Array<string> = ['/login']

/**
 * @description 快前置由守卫
 * @author fxbsujay@gmail.com
 * @version 0:28 2022/6/5
 */
router.beforeEach( (to, from, next)=> {
    const token:string = store.getters.token ||  getToken()
    if (!token) {
        if (whiteList.includes(to.path)) {
            next()
        } else {
            next('/login')
        }
    } else {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    }
})