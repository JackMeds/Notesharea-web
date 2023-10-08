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
        <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable v-model:value="password" />
      </div>
    </div>
    <div class="buttonGroup">
      <n-button strong ghost type="primary" @click="toRegister">没有账户，前去注册</n-button>
      <n-button type="primary" @click="doLogin">登录</n-button>
    </div>
  </div>
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router"; // 引入useRouter
import authNav from "../../components/auth/authNav.vue"
import CryptoJS from 'crypto-js';

const { proxy } = getCurrentInstance();
const router = useRouter();

const toRegister = () => {
  router.push("/auth/register");
}
//用户名
const username = ref("");
//密码
const password = ref("");

//处理登录
const doLogin = () => {
  const hashedData = ref('');
  hashedData.value = CryptoJS.SHA256(password.value).toString();
  proxy.$http
    .post("http://localhost:3000/api/user/login", { userName: username.value, password: hashedData.value })
    .then((response) => {
      console.log(response.data);
    });
}
</script>
<style scoped>
.centerInput {
  @apply container mx-auto w-1/3 mt-40;

  .title {
    @apply text-2xl border-b border-black px-5;
  }

  .inputGroup {
    @apply mt-5;

    .inputTitle {
      @apply block;

      p {
        @apply text-xs px-2 my-1;
      }
    }

  }

  .buttonGroup {
    @apply mt-5 float-right;

    .n-button {
      @apply ml-2;
    }
  }
}
</style>
