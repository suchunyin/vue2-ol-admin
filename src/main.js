/*
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 16:16:07
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-08 17:22:58
 * @FilePath: \vue2-ol-admin\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import "./mockjs/index";
import axios from "axios";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
