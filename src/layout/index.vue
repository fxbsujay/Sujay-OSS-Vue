<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="layout-logo"><h1>SUSU - OSS</h1></div>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="light"
          mode="horizontal"
      >
       <layout-menu ></layout-menu>
      </a-menu>
    </a-layout-header>
    <layout-content></layout-content>
    <a-layout-footer >
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { AsyncRoutes } from '../router'
import { RouteRecordRaw } from 'vue-router'
import LayoutMenu from '../components/LayoutMenu'
import LayoutContent from '../components/LayoutContent'
import 'ant-design-vue/es/breadcrumb/style/css'
export default defineComponent({
  name: "Layout",
  components: {
    LayoutMenu,
    LayoutContent
  },

  setup() {
    const routes = ref<RouteRecordRaw[]>(AsyncRoutes)
    return {
      routes,
      selectedKeys: ref<string[]>([]),
    }
  }
})

</script>