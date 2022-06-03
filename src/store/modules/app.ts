import { loginRequest } from '../../api/user'
import router from '../../router'

export enum UserActionTypes {
    LOGIN = 'LOGIN'
}

export default {
    namespace: true,
    state: () =>({
        token: localStorage.getItem('token') || ''
    }),
    mutations: {
        setToken(state: any, token: string) {
            state.token = token
            localStorage.setItem('token',token)
        }
    },
    actions: {
        async [UserActionTypes.LOGIN]({commit}: any, loginModel: { username: string, password: string }) {
            let {username, password} = loginModel
            username = username.trim()
            await loginRequest({username, password}).then(async (res) => {
                commit('setToken', res?.data)
                await router.replace('/')
            }).catch( async err => {
                await router.replace('/')
            })
        }
    }
}