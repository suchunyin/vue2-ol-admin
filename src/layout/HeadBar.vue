<!--
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 15:18:46
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-02-28 15:19:26
 * @FilePath: \vue2-ol-admin\src\layout\HeadBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="headBar">
    <div class="headLeft">{{ title }}</div>
    <div class="headRight"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "空气质量仿真系统",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headBar {
  background-color: blueviolet;
  margin: 0;
  padding: 0;
}
</style>
