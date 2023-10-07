<template>
  <authNav class="authNav" />
  <!-- 中央输入框 -->
  <div class="centerInput">
    <div class="title">
      <h1>注册</h1>
    </div>
    <div class="inputGroup">
      <div class="username">
        <label class="inputTitle">
          <p>用户名</p>
        </label>
        <n-input type="text" placeholder="请输入用户名" clearable />

      </div>
      <div class="fristPassword">
        <div class="inputTitle">
          <p>密码</p>
        </div>
        <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable />
      </div>
      <div class="secPassword">
        <div class="inputTitle">
          <p>确认密码</p>
        </div>
        <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable />
      </div>
      <div class="email">
        <div class="inputTitle">
          <p>邮箱</p>
        </div>
        <n-input type="text" placeholder="请输入邮箱" clearable />
      </div>
      <div class="emailCode">
        <div class="inputTitle">
          <p>邮箱验证码</p>
        </div>
        <n-input-group>
          <n-input type="text" placeholder="请输入邮箱验证码" clearable />
          <n-button type="primary" ghost> 发送验证码 </n-button>
        </n-input-group>
      </div>
      <div class="registerEula">
        <n-checkbox class="checkbox" v-model:checked="eulaCheck" />
        <n-checkbox class="checkbox" v-model:checked="eulaCheck" />
        <span>已阅读并同意</span><span class="eula">Notesharea用户协议</span><span>和</span><span class="eula">Notesharea隐私政策</span>
      </div>
    </div>
    <div class="buttonGroup">
      <n-button strong ghost type="primary" @click="toLogin">已有账户，去登录</n-button>
      <n-button type="primary">注册</n-button>
    </div>

  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // 引入useRouter
import authNav from "../../components/auth/authNav.vue"

const router = useRouter();

let eulaCheck = ref(false);

const toLogin = () => {
  router.push("/auth/login");
}
</script>
<style scoped>
@import "../../style/auth/register.css";
</style>
