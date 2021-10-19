/*
 * @Author: your name
 * @Date: 2021-10-15 08:35:50
 * @LastEditTime: 2021-10-15 09:48:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\layout\login\components\interface.ts
 */
/**
 * 登录表单
 */
export interface loginForm {
  username: string;
  password: string;
}

interface rule {
  // required: {
  required: boolean,
  message: string,
  trigger: string,
  // }
}

/**
 * 登录表单规则
 */
type k1 = keyof loginForm;
type val1 = keyof { [x: string]: rule }
export type loginRules = {
  [P in keyof loginForm]?: Array<rule>;
}
