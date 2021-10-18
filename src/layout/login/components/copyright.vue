<!--
 * @Author: your name
 * @Date: 2021-10-15 11:50:16
 * @LastEditTime: 2021-10-15 11:56:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\login\components\copyright.vue
-->

<template>
  <span class="copyright">copyright {{ name }}</span>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      name: "小卡车",
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less">
.copyright {
  font-size: 13px;
  color: #ffffff;
}
</style>
