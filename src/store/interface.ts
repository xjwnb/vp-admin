/*
 * @Author: your name
 * @Date: 2021-10-19 11:06:07
 * @LastEditTime: 2021-10-19 15:27:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\store\interface.ts
 */
import { Store } from "vuex";

// modules
export interface module {
  state: object,
  mutations: object,
  actions: object
}

/**
 * permission
 */
// state
export interface permissionState {
  addRoutes: Array<any>;
  routes: Array<any>;
}
// actions
export interface permissionActions {
  (store: Store<permissionState>): any
}


// request result
export interface requestResult {
  code?: number;
  message?: string;
  data?: Array<any> | string | number;
  error?: string;
}
