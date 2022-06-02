import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
/**
 * 为了省事，全局注册
 */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
createApp(App).use(router).use(Antd).use(store).mount('#app')
