<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="layout-logo"><h1>LOGO</h1></div>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="light"
          mode="horizontal"
      >
       <layout-menu ></layout-menu>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb>
      <app-main></app-main>
    </a-layout-content>
    <a-layout-footer >
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import AppMain from './AppMain'
import { AsyncRoutes } from '../router'
import { RouteRecordRaw } from 'vue-router'
import LayoutMenu from "./LayoutMenu";
export default defineComponent({
  name: "Layout",
  components: {
    AppMain,
    LayoutMenu
  },

  setup() {
    const routes = ref<RouteRecordRaw[]>(AsyncRoutes)
    return {
      routes,
      selectedKeys: ref<string[]>(['8']),
    }
  }
})

</script>