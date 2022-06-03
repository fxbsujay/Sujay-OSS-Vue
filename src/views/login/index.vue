<template>
  <div class="sea">
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
  <div class="container">

    <div class="left">
      <h1>login</h1>
      <p style="font-size: 17px">SUSU - OSS</p>
      <p>欢迎光临, 请输入您的账号和密码 !</p>
    </div>

    <div class="right">
      <div class="form">
        <label></label>
        <a-input v-model:value="state.username" placeholder="账号">
          <template #suffix>
            <a-tooltip>
              <user-outlined type="user" />
            </a-tooltip>
          </template>
        </a-input>
        <label></label>
        <a-input-password v-model:value="state.password" placeholder="密码" />
        <a-button type="primary" @click="login" :loading="loading">登录</a-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue'
import { defineComponent, ref,toRefs,toRef,reactive } from 'vue'
import ARow from "ant-design-vue/es/grid/Row"
import './index.less'
import { loginRequest } from '../../api/user'
import { LoginModel } from '../../model/UserModel'

export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    InfoCircleOutlined,
    ARow
  },
  setup: function () {
    const loading = ref<boolean>(false)
    const state = ref<LoginModel>({
      username: '',
      password: '',
      code: ''
    })
    const methods = reactive({

      login: () => {
        state.value.username = '222'
        console.log(state.value.username)
        loginRequest(state.value).then(async (res) => {

        }).catch((err) => {
          console.log(err)
        })
      }
    })

    return {
      loading,
      state,
      ...toRefs(methods)
    }
  }
})

</script>
