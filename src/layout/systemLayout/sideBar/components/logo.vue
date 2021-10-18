<!--
 * @Author: your name
 * @Date: 2021-10-15 14:28:53
 * @LastEditTime: 2021-10-15 16:55:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\systemLayout\sideBar\components\logo.vue
-->

<template>
  <div class="logo">
    <!-- logo -->
    <!-- <el-avatar shape="square" :size="60" :src="url"></el-avatar> -->
    <el-image style="width: 50px; height: 50px" :src="url"></el-image>
    <div class="logo_title" v-show="!collapse">LOGO</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const state = reactive({
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    });
    return {
      ...toRefs(props),
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less">
.logo {
  width: 50px;
  height: 50px;
  color: #ffffff;
  // box-sizing: border-box;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;

  .el-image {
    border-radius: 5px;
    overflow: hidden;
  }

  .logo_title {
    color: #FFFFFF;
  }
}
</style>