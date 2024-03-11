/*
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-03-11 17:45:26
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-11 17:55:37
 * @FilePath: \vue2-ol-admin\src\store\modules\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const state = {
  name: null,
  admin: null,
  token: null,
};
const getters = {
  getUserName: (state) => state.name,
  getUserIsAdmin: (state) => state.admin,
  getUserToken: (state) => state.token,
};
const mutations = {
  setUserInfo(state, newVal) {
    state.name = newVal.name;
    state.admin = newVal.admin;
    state.token = newVal.token;
  },
};
const actions = {
  login(context, params) {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user/login", params)
        .then((res) => {
          console.log(res);
          if (res.data.status === 200) {
            let userInfo = {
              name: params.name,
              admin: res.data.data.admin,
              token: res.data.data.token,
            };
            context.commit("setUserInfo", userInfo);
            localStorage.setItem("user", JSON.stringify(userInfo));
          }
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  logout(context) {
    return new Promise((resolve) => {
      context.dispatch("resetInfo");
      resolve();
    });
  },
  infoInit(context) {
    let userInfo = JSON.parse(localStorage.getItem("user"));
    context.commit("setUserInfo", userInfo);
  },
  resetInfo(context) {
    return new Promise((resolve) => {
      localStorage.removeItem("user");
      context.commit("setUserInfo", {
        name: null,
        admin: null,
        token: null,
      });
      resolve();
    });
  },
};
export default { state, getters, mutations, actions };
