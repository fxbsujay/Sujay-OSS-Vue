import { loginRequest } from '../../api/user'
import router from '../../router'
import { setToken,getToken } from '../../utils/cookies'

export enum UserActionTypes {
    LOGIN = 'LOGIN'
}

export default {
    namespace: true,
    state: () =>({
        token: getToken() || ''
    }),
    mutations: {
        setToken(state: any, token: string) {
            setToken(token)
        }
    },
    actions: {
        /**
         * 用户登录
         * @author fxbsujay@gmail.com
         * @param commit 方法体
         * @param loginModel 登录请求体对象
         */
        async [UserActionTypes.LOGIN]({commit}: any, loginModel: { username: string, password: string }) {
            let {username, password} = loginModel
            username = username.trim()
            await loginRequest({username, password}).then( (res) => {
                commit('setToken', res?.token)
                router.replace('/')
            }).catch( async err => {
                return Promise.reject();
            })
        }
    }
}