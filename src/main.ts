/*
 * @Author: your name
 * @Date: 2021-10-14 11:16:16
 * @LastEditTime: 2021-10-14 16:36:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\main.ts
 */
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);
import router from "./router";
import store from "./store";
// Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// Element Icon
import * as EleIcons from "@element-plus/icons";
for (let iconName in EleIcons) {
  app.component(iconName, (EleIcons as any)[iconName]);
}


app.use(store).use(router).use(ElementPlus).mount("#app");
