<!--
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 15:17:34
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-11 17:40:00
 * @FilePath: \vue2-ol-admin\src\layout\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%A
-->
<template>
  <el-container class="app-wrapper">
    <el-header class="header"><headBar /></el-header>
    <el-container>
      <el-aside width="200px"><Menu /></el-aside>
      <el-main>
        <breadcrumb v-if="this.$route.name !== 'home'" />
        <div class="container"><router-view></router-view></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeadBar from "./HeadBar.vue";
import Menu from "./Menu.vue";
import Breadcrumb from "./Breadcrumb.vue";
export default {
  components: {
    HeadBar,
    Menu,
    Breadcrumb,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  height: 100%;
  width: 100%;
  main.el-main {
    background-color: #ecf5ff;
    overflow: hidden;
  }

  .container {
    background-color: #fff;
    overflow: auto;
    height: 100%;
  }
}
.header {
  padding: 0;
}
.el-container {
  overflow: hidden;
}
</style>
<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
</style>
