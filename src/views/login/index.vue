<!--
 * @Author: your name
 * @Date: 2021-10-14 13:37:10
 * @LastEditTime: 2021-10-15 11:56:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\login\index.vue
-->
<template>
  <div class="login_container">
    <!-- login - form -->
    <div class="login_form">
      <login-form />
    </div>

    <!-- copyright -->
    <div class="copyright_container">
      <copyright />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
// components
import { LoginForm, Copyright } from "./components";

export default defineComponent({
  components: {
    LoginForm,
    Copyright,
  },
  setup() {
    const router = useRouter();
    let name = ref("小卡车");
    const handleLogin = () => {
      router.push({
        name: "Index",
      });
    };

    return {
      name,
      handleLogin,
    };
  },
});
</script>

<style lang="less" scoped>
.login_container {
  font-size: 20px;
  width: 100vw;
  height: 100vh;
  background: url("https://xkc-oss-bucket.oss-cn-guangzhou.aliyuncs.com/images/bg.jpg?versionId=CAEQCRiBgICwj5b_uxciIDExMzVmZDJiODlhYzQ1MjZhMWVhNDIzOWNkZTBlZmMy")
    no-repeat;
  background-size: cover;
  background-position: center;

  .login_form {
    width: 400px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;

    .el-input {
      // margin: 30x 0d;
      margin-bottom: 20px;
    }

    .el-button {
      width: 100%;
    }
  }

  .copyright_container {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
  }
}
</style>
