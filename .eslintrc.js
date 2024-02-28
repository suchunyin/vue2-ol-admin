/*
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-01-02 17:31:49
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-02-28 15:46:36
 * @FilePath: \vue2-ol-admin\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 关闭名称校验
    "vue/multi-word-component-names": "off",
  },
};
