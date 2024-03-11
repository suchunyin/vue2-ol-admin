<!--
 * @Author: suchunyin 1831869101@qq.com
 * @Date: 2024-03-07 16:02:16
 * @LastEditors: suchunyin 1831869101@qq.com
 * @LastEditTime: 2024-03-08 22:14:19
 * @FilePath: \vue2-ol-admin\src\views\Login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="content">
    <div class="login-content">
      <span class="title">空气质量数据管理系统</span>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.name" placeholder="账号名">
            <i slot="prefix" class="el-input__icon el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="密码">
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login", { ...this.form }).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.$message.success(res.message);
          this.$router.push("/");
        } else this.$message.error(res.message);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  height: 100%;
  width: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/img/login-bg.jpg") no-repeat center;
    background-size: cover;
    filter: blur(3px);
  }
  .login-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #071421a1;
    height: 350px;
    width: 500px;
    boeder: #999 solid 1px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    color: #fff;

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    .title {
      font-size: 30px;
    }
  }
}
</style>
