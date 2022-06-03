<template>
  <div>A</div>
  <router-view/>
  <app-main></app-main>
</template>

<script lang="ts">
import {  defineComponent } from 'vue'
import AppMain from "./AppMain";
export default defineComponent({
  name: "Layout",
  components: {
    AppMain
  },

  setup() {

  }
})

</script>

<style scoped>

</style>