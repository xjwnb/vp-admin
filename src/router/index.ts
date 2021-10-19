/*
 * @Author: your name
 * @Date: 2021-10-14 11:16:16
 * @LastEditTime: 2021-10-19 17:22:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { Component } from "vue";
import Home from "../views/Home.vue";
// systemlayout
import SystemLayout from "../layout/systemLayout/index.vue";

/**
 * Note: 路由配置项
 *
 * hidden: true                   // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
 * alwaysShow: true               // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式--如组件页面
 *                                // 只有一个时，会将那个子路由当做根路由显示在侧边栏--如引导页面
 *                                // 若你想不管路由下面的 children 声明的个数都显示你的根路由
 *                                // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
 * redirect: noRedirect           // 当设置 noRedirect 的时候该路由在面包屑导航中不可被点击
 * name:'router-name'             // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
    roles: ['admin','editor']    // 设置该路由进入的权限，支持多个权限叠加
    title: 'title'               // 设置该路由在侧边栏和面包屑中展示的名字
    icon: 'svg-name'             // 设置该路由的图标，对应路径src/icons/svg
    breadcrumb: false            // 如果设置为false，则不会在breadcrumb面包屑中显示
  }
 */

interface allRoute {
  hidden: boolean;
  name: string;
  path: string;
  component: any;
  redirect: string;
  meta: {
    roles: Array<string>;
    title: string;
    icon?: string
    breadcrumb: boolean;
  },
  children?: Array<any>;
}


export const constantRoutes: any = [
  {
    // path: "/",
    // name: "Home",
    // component: Home,

    hidden: false,
    name: "Layout",
    path: "/",
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
    hidden: false,
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
    component: () => import(/*webpackChunkName: "Login"*/ "../views/login/index.vue"),
  },
  {
    path: "/404",
    component: () => import(/* webpackChunkName: "404" */ "../views/404/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});

export default router;
