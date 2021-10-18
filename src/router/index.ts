/*
 * @Author: your name
 * @Date: 2021-10-14 11:16:16
 * @LastEditTime: 2021-10-15 13:55:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
// systemlayout
import SystemLayout from "../layout/systemLayout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/index",
    component: SystemLayout,
    children: [
      {
        path: "",
        name: "Index",
        component: () => import(/* webpackChunkName: "Index" */ "../views/index/index.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/*webpackChunkName: "Login"*/ "../layout/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
