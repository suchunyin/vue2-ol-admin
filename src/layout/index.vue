<!--
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 15:17:34
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-02-28 16:04:50
 * @FilePath: \vue2-ol-admin\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <div class="app-wrapper">
    <headBar />
    <div class="main-container">
      <router-view :key="this.$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import HeadBar from "./HeadBar.vue";
export default {
  components: {
    HeadBar,
  },
};
</script>

<style>
body {
  height: 100%;
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
</style>
