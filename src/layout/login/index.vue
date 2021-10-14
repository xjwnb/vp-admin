<template>
  <div class="login_container">
    <div class="login_form">
      <el-input v-model="username" placeholder="用户名">
        <template #prefix>
          <el-icon>
            <avatar />
          </el-icon>
        </template>
      </el-input>
      <el-input v-model="password" placeholder="密码" show-password>
        <template #prefix>
          <el-icon>
            <lock />
          </el-icon>
        </template>
      </el-input>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();
    let name = ref("小卡车");
    const handleLogin = () => {
      router.push({
      name: "Index"
      })
    }

    return {
      name,
      handleLogin
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

    .el-input {
      // margin: 30x 0d;
      margin-bottom: 20px;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
