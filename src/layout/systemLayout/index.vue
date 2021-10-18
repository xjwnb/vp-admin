<!--
 * @Author: your name
 * @Date: 2021-10-15 13:46:38
 * @LastEditTime: 2021-10-15 17:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\systemLayout\index.vue
-->

<template>
  <div class="system_layout">
    <el-container>
      <!-- side -->
      <el-aside
        width="200px"
        :style="{
          background: sideBgColor,
          width: collapse ? '66px' : '220px',
          transition: 'width .3s',
        }"
      >
        <side-bar :collapse="collapse" />
      </el-aside>
      <el-container>
        <!-- header -->
        <el-header :style="{ background: headerBgColor, height: '50px' }">
          <header-bar @handleCollapseChange="handleCollapseChange" />
        </el-header>

        <!-- main -->
        <el-main>
          Main
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
// interface
import { systemLayout } from "./interface";
// components
import SideBar from "./sideBar/index.vue";
import HeaderBar from "./headerBar/index.vue";

export default defineComponent({
  components: {
    SideBar,
    HeaderBar,
  },
  setup() {
    const state = reactive({
      sideBgColor: "#000000", // side 背景颜色
      headerBgColor: "#FFFFFF",
      mainBgColor: "#FFFFFF",
      collapse: false,
    });

    // methods
    const handleCollapseChange = (isCollapse: boolean) => {
      state.collapse = isCollapse;
    };
    return {
      ...toRefs(state),
      handleCollapseChange,
    };
  },
});
</script>

<style lang="less">
.system_layout {
  width: 100vw;
  min-height: 100vh;

  .el-side {
    width: 250px !important;
  }

  .el-container {
    min-height: 100vh;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    overflow: hidden;
    border-bottom: 1px solid #e2e2e2;
  }
}
</style>