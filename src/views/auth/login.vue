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
  <!-- <n-message-provider>
    <content />
  </n-message-provider> -->
</template>
<script setup>
import { ref, getCurrentInstance } from "vue";
import Cookies from "js-cookie";
import { useRouter } from "vue-router"; // 引入useRouter
import authNav from "../../components/auth/authNav.vue"
import CryptoJS from 'crypto-js';

const { proxy } = getCurrentInstance();
const router = useRouter();
// const message = useMessage()

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
  let data = { "userName": username.value, "password": password.value };
  proxy.$http
    .post("http://localhost:3000/api/user/login", data)
    .then((response) => {
      console.log(response.data);
      if (response.data.code == 0) {
        //登录成功
        // 从后端获取 session 数据后，存储到 cookie 中
        const sessionData = response.data.data.session;
        console.log(sessionData);
        // 使用 js-cookie 将 session 数据存储到 cookie 中，并将 maxAge 转换为天数作为过期时间设置
        // 这里假设 sessionData 包含了你想存储的 session 信息
        const maxAgeInDays = sessionData.cookie.maxAge / (1000 * 60 * 60 * 24); // 将毫秒转换为天
        Cookies.set("userInfo", JSON.stringify(sessionData.userInfo), { expires: maxAgeInDays });


        // 从 cookie 中获取存储的 session 数据
        const storedSession = Cookies.get("userInfo");
        // 将 JSON 字符串转换为 JavaScript 对象
        const cookieData = JSON.parse(storedSession);

        // 现在 sessionData 包含了你存储在 cookie 中的 JavaScript 对象
        console.log(cookieData);
        //跳转到首页
        router.push("/");
      }
      // message.error(code: 10004, message: '登录失败，用户名或密码错误');
      else if (response.data.code == 10004) {
        //登录失败
        // message.error("登录失败，用户名或密码错误");
        alert("登录失败，用户名或密码错误");
      }
      else {
        //登录失败
        // message.error("登录失败");
        alert("登录失败");
      }
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
