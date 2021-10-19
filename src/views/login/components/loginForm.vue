<!--
 * @Author: your name
 * @Date: 2021-10-15 08:23:59
 * @LastEditTime: 2021-10-19 16:55:47
 * @LastEditors: Please set LastEditors
 * @Description: 登录表单
 * @FilePath: \vp-admin\src\layout\login\components\loginForm.vue
-->

<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="loginForm">
    <el-form-item prop="username">
      <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input
        type="password"
        v-model="ruleForm.password"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="full_btn" type="primary" @click="submitForm"
        >提交</el-button
      >
      <el-button class="full_btn" @click="resetForm" style="margin: 10px 0 0"
        >重置</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  DefineComponent,
  nextTick,
  toRef,
} from "vue";
// instance
import { loginRules, loginForm } from "./interface";
import { useRouter } from "vue-router";
import { getRouters } from "@/api/menu";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const loginForm = ref<any>();
    const ruleForm: loginForm = reactive({
      username: "",
      password: "",
    });

    const rules: loginRules = reactive({
      username: [
        { required: true, message: "用户名不能为空", trigger: "blur" },
      ],
      password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
    });

    /**
     * 生成路由 vuex
     */
    const GenerateRoutesAction = () => store.dispatch("GenerateRoutes");

    /**
     * 提交表单
     */
    async function submitForm() {
      try {
        await loginForm.value?.validate("blur");
        // 菜单
        // let result = await getRouters();
        // console.log(result);
        const routerResult = await GenerateRoutesAction();

        console.log("....", routerResult);
        router.push({
          name: "Index",
        });
      } catch (error) {
        console.log(error);
      }
    }

    /**
     * 重置表单
     */
    function resetForm(): void {
      loginForm.value?.resetFields();
    }

    // console.log(toRefs(ruleForm));

    return {
      loginForm,
      ruleForm,
      rules,

      // methods
      submitForm,
      resetForm,
      // toRefs(ruleForm)
    };
  },
});
</script>

<style lang="less">
.full_btn {
  width: 100%;
}
</style>