<script lang="ts">
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import ARow from "ant-design-vue/es/grid/Row";
import './index.less'

export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    InfoCircleOutlined,
    ARow
  },
  setup() {
    const loading = ref<boolean>(false)
    const userName = ref<string>('');
    const value = ref<string>('');
    return {
      userName,
      loading,
      value
    }
  }
})

</script>

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
        <a-input v-model:value="userName" placeholder="账号">
          <template #suffix>
            <a-tooltip>
              <user-outlined type="user" />
            </a-tooltip>
          </template>
        </a-input>
        <label></label>
        <a-input-password v-model:value="value" placeholder="密码" />
        <a-button type="primary" @click=" loading = true " :loading="loading">登录</a-button>
      </div>
    </div>
  </div>
</template>
