<template lang="">
  <!-- 中央输入框 -->
  <div class="centerInput">
    <div class="title">
      <h1>登录</h1>
    </div>
    <div class="inputGroup">
      <div class="username">
        <div class="inputTitle"><p>用户名</p></div>
        <n-input type="text" placeholder="请输入用户名" clearable />
      </div>
      <div class="password">
        <div class="inputTitle"><p>密码</p></div>
        <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable />
      </div>
    </div>
    <div class="buttonGroup">
        <n-button strong ghost type="primary">注册</n-button>
        <n-button type="primary">登录</n-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
</script>
<style>
@import "../../style/auth/login.css";
</style>
