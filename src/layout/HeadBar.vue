<!--
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-02-28 15:18:46
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-11 17:49:18
 * @FilePath: \vue2-ol-admin\src\layout\HeadBar.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="headBar">
    <div class="headLeft">{{ title }}</div>
    <div class="headRight">
      <div class="user">
        <img src="../assets/img/avatar.png" alt="" />
        <span>{{ this.user }}</span>
      </div>
      <el-button type="text" @click="handleLogout">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "🗺 空气质量数据管理系统",
      user: null,
    };
  },
  mounted() {
    this.user = this.$store.state.user.name;
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headBar {
  background-color: #1946a1;
  color: #fff;
  height: 60px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .headLeft {
    font-size: 20px;
  }
  .headRight {
    display: flex;
    align-items: center;
    .user {
      display: flex;
      align-items: center;
      padding: 0px 20px;
      img {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        padding: 0px 5px;
      }
    }
    button.el-button.el-button--text {
      color: #fff;
      padding: 0px 5px;
      &:hover {
        color: #66b1ff;
      }
    }
  }
}
</style>
