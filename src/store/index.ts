/*
 * @Author: your name
 * @Date: 2021-10-14 11:16:16
 * @LastEditTime: 2021-10-19 14:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\store\index.ts
 */
import { createStore } from "vuex";

// modules
import permission from "./modules/permission";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    permission,
  },
});
