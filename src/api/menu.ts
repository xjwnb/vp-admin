/*
 * @Author: your name
 * @Date: 2021-10-18 11:54:11
 * @LastEditTime: 2021-10-18 13:41:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\api\menu.ts
 */
import request from "@/utils/request";

/**
 * 获取菜单
 */
export function getRouters() {
  return request({
    url: "getRouters",
    method: "GET",
  })
}