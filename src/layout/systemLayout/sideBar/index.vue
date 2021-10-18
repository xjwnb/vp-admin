<!--
 * @Author: your name
 * @Date: 2021-10-15 13:42:48
 * @LastEditTime: 2021-10-15 16:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\sideBar\index.vue
-->

<template>
  <div class="sideBar_container">
    <!-- logo -->
    <div class="logo_container">
      <logo :collapse="collapse" />
    </div>

    <!-- menu -->
    <el-menu
      active-text-color="#20A4E6"
      background-color="#000000"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :collapse="collapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>


<script lang="ts">
import { defineComponent, toRefs } from "vue";
// components
import { Logo } from "./components";

export default defineComponent({
  components: {
    Logo,
  },
  props: {
    collapse: {
      type: Boolean,
      default: false,
    }
  },
  setup(props) {
  
    // methods
    const handleOpen = (key: string, keyPath: Array<string>) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: Array<string>) => {
      console.log(key, keyPath);
    };

    return {
      ...toRefs(props),
      // methods
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style lang="less">
.sideBar_container {
  .logo_container {
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px;
    box-sizing: border-box;
  }

  .el-menu {
    /deep/ .el-sub-menu {
      /deep/ .el-sub-menu__title {
        // width: 220px !important;
        width: 100%;
      }
    }
  }
}
</style>