/*
 * @Author: your name
 * @Date: 2021-10-15 17:15:42
 * @LastEditTime: 2021-10-18 08:47:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\utils\storage.ts
 */
import jsCookie from "js-cookie";

const TOKEN_KEY: string = 'ADMIN_TOKEN';


/**
 * 获取token
 */
export function getToken() {
  return jsCookie.get(TOKEN_KEY);
}

/**
 * 设置token
 */
export function setToken(value: string) {
  jsCookie.set(TOKEN_KEY, value);
}

/**
 * 删除token
 */
export function removeToken(): void {
  jsCookie.remove(TOKEN_KEY);
}