<!--
 * @Author: your name
 * @Date: 2021-10-14 16:59:10
 * @LastEditTime: 2021-10-14 17:14:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\views\index\index.vue
-->

<template>
  <div>
    {{name}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      name: "小卡车"
    }
  }
})
</script>
<style scoped>

</style>