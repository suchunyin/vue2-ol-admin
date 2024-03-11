<template>
  <div class="bread-container">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in breadList" :key="item.name">
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <!-- :to="{ path: item.path}" -->
</template>

<script>
export default {
  data() {
    return {
      breadList: [],
    };
  },
  mounted() {
    this.getBreadList();
  },
  watch: {
    $route() {
      this.getBreadList();
    },
  },
  methods: {
    getBreadList() {
      console.log(this.$route.matched);
      this.breadList = this.$route.matched;
      this.breadList[0].meta.title = "首页";
    },
  },
};
</script>

<style lang="scss" scoped>
.bread-container {
  margin-bottom: 10px;
}
</style>
