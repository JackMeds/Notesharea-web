<template>
  <authNav class="authNav" />
  <!-- 中央输入框 -->
  <div class="centerInput">
    <div class="title">
      <h1>登录</h1>
    </div>
    <div class="inputGroup">
      <div class="username">
        <div class="inputTitle">
          <p>用户名</p>
        </div>
        <n-input type="text" placeholder="请输入用户名" clearable v-model:value="username" />
      </div>
      <div class="password">
        <div class="inputTitle">
          <p>密码</p>
        </div>
        <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable />
      </div>
    </div>
    <div class="buttonGroup">
      <n-button strong ghost type="primary" @click="toRegister">没有账户，前去注册</n-button>
      <n-button type="primary" @click="doLogin">登录</n-button>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance  } from "vue";
import { useRouter } from "vue-router"; // 引入useRouter
import authNav from "../../components/auth/authNav.vue"

const { proxy } = getCurrentInstance();
const router = useRouter();

const toRegister = () => {
  router.push("/auth/register");
}
//用户名
let username = ref("");

//处理登录
const doLogin = () => {
  proxy.$http
    .post("http://localhost:3000/api/user/isExist",{ userName: username.value })
    .then((response) => {
      console.log(response);
    });
}
</script>
<style>
@import "../../style/auth/login.css";
</style>
