/*
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 16:16:07
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-11 17:37:40
 * @FilePath: \vue2-ol-admin\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataList from "../views/DataList.vue";
import UserManage from "../views/manage/UserManage.vue";
import LogManage from "../views/manage/LogManage.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        meta: { title: "首页", icon: "el-icon-s-home" },
        component: HomeView,
      },
      {
        path: "/dataList",
        name: "dataList",
        meta: { title: "监测数据列表", icon: "el-icon-s-data" },
        component: DataList,
      },
      {
        path: "/manage",
        name: "manage",
        meta: { title: "系统管理", icon: "el-icon-s-tools" },
        component: () => import("../views/manage/index.vue"),
        redirect: "/manage/user",
        children: [
          {
            path: "/manage/user",
            name: "user",
            meta: { title: "用户管理", icon: "el-icon-s-custom" },
            component: UserManage,
          },
          {
            path: "/manage/log",
            name: "log",
            meta: { title: "日志管理", icon: "el-icon-s-platform" },
            component: LogManage,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const hasToken = JSON.parse(localStorage.getItem("user"));

  // 刷新重新加载用户数据
  if (hasToken && !store.state.user.name) {
    console.log(hasToken);
    await store.dispatch("infoInit");
  }

  // 是否需要登录
  if (to.path !== "/login" && !store.state.user.name && !hasToken) {
    next({ path: "/login" });
  }
  if (to.path == "/login" && (store.state.user.name || hasToken)) {
    next({ path: "/" });
  }

  next();
});

export default router;
