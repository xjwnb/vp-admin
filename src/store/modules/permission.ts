/*
 * @Author: your name
 * @Date: 2021-10-19 11:02:07
 * @LastEditTime: 2021-10-19 17:28:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\store\modules\permission.ts
 */
import { permissionState } from "../interface";
import { Store, Module, Action } from "vuex";
import { getRouters } from "@/api/menu";
import { constantRoutes } from "@/router/index";
import Layout from "@/layout/systemLayout/index.vue";


interface router {
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

const permission: any = {
  state: {
    addRoutes: [],
    routes: [],
  },
  mutations: {
    SET_ROUTES: (state: permissionState, routes: Array<any>) => {
      state.addRoutes = routes;
      state.routes = constantRoutes.concat(...routes);
    }
  },
  actions: {
    GenerateRoutes(store: Store<permissionState>) {
      return new Promise((resolve) => {
        getRouters().then((res: any) => {
          // if (res.code === 200) {
          let nowRoute = res.data;
          nowRoute = formatRouter(nowRoute);
          nowRoute.push({ path: '*', redirect: "/404", hidden: true })
          store.commit("SET_ROUTES", nowRoute);
          resolve(nowRoute);
          // }
        })
      });
    }
  }
}


function formatRouter(router: Array<router>) {
  return router.map((route: router) => {
    if (route.component) {
      if (route.component === "Layout") {
        route.component = Layout;
      } else {
        route.component = (resolve: any) => require([`@/views/${route.component}`], resolve);
      }
    }

    if (route.children && route.children.length > 0) {
      route.children = formatRouter(route.children);
    }
    return route;
  })
}

export default permission;