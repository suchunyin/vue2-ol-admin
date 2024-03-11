import Mock from "mockjs";

Mock.mock("/api/user/login", "post", (params) => {
  console.log(params);
  let loginData = JSON.parse(params.body);

  let data;
  if (isUser(loginData)) {
    data = Mock.mock({
      token: "@id",
    });
    let admin = forUserType(loginData);
    return {
      status: 200,
      message: "请求登录成功！",
      data: { admin, ...data },
    };
  }
  return {
    status: 405,
    message: "账户名或密码有误，请重试！",
  };
});

// 账户匹配
const isUser = (params) => {
  if (params.name === "admin" && params.password === "123456") {
    return true;
  }
  if (params.name === "user1" && params.password === "123456") {
    return true;
  }
  return false;
};
// 账户类型
const forUserType = (params) => {
  return params.name === "admin";
};
