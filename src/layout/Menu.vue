<template>
  <el-menu :default-active="activeIndex" class="menu" router>
    <template v-for="item in this.menuList">
      <el-menu-item
        class="menuItem"
        v-if="!item.children"
        :index="item.path"
        :key="item.path"
      >
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu
        class="menuItem"
        v-if="item.children && isAdmin"
        :index="item.path"
        :key="item.path"
      >
        <template slot="title">
          <i :class="item.meta.icon"></i>
          {{ item.meta.title }}
        </template>
        <el-menu-item
          v-for="children in item.children"
          :index="children.path"
          :key="children.path"
        >
          <i :class="children.meta.icon"></i>
          <span slot="title">{{ children.meta.title }}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: null,
      menuList: [],
      isAdmin: false,
    };
  },
  mounted() {
    this.activeIndex = this.$route.path;
    this.menuList = this.$router.options.routes[0].children;
    this.isAdmin = this.$store.state.user.admin;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  .menuItem {
    text-align: left;
  }
}
</style>
