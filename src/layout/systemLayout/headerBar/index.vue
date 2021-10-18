<!--
 * @Author: your name
 * @Date: 2021-10-15 15:10:24
 * @LastEditTime: 2021-10-15 16:23:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\systemLayout\headerBar\index.vue
-->

<template>
  <div class="header_bar">
    <div class="header_bar_left">
      <div class="header_bar_icon" @click="handleCollapse">
        <!-- 右图片 -->
        <el-image v-if="!isCollapse" :src="leftIcon" />
        <el-image v-if="isCollapse" :src="rightIcon" />
      </div>
    </div>
    <div class="header_bar_right">右边布局</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const state = reactive({
      leftIcon: require("../../../assets/images/layout/zuofudong.png"),
      rightIcon: require("../../../assets/images/layout/youfudong.png"),
      isCollapse: false,
    });

    // methods
    const handleCollapse = function (): void {
      state.isCollapse = !state.isCollapse;
      emit("handleCollapseChange", state.isCollapse);
    };

    return {
      ...toRefs(state),
      handleCollapse,
    };
  },
});
</script>

<style lang="less">
.header_bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.header_bar_icon {
  cursor: pointer;
  padding: 20px;
  background-color: #ffffff;
  transition: background-color 0.5s;

  &:hover {
    background-color: #f9f9f9;
  }

  .el-image {
    width: 20px;
    height: 20px;
  }
}
</style>
