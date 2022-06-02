import { createStore } from 'vuex'
const store = createStore({
    state: {
        userInfo: {
            name:'myName'
        }
    },
    mutations: {
        getUserInfo (state:any, name:string|number) {
            state.userInfo.name = name
        }
    },
    actions: {
        asyncGetUserInfo (context:any) {
            setTimeout(() => {
                context.commit("getUserInfo", +new Date() + 'action')
            },2000)
        }
    },
    getters: {
        userInfoGetter (state:any) {
            return state.userInfo.name
        }
    }
})

export default store;