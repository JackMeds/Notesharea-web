<template lang="">
  <!-- 中央输入框 -->
  <div class="centerInput">
    <div class="title">
      <h1>注册</h1>
    </div>
    <div class="inputGroup">
      <div class="username">
        <div class="inputTitle"><p>用户名</p></div>
        <n-input type="text" placeholder="请输入用户名" clearable />
        
      </div>
      <div class="fristPassword">
        <div class="inputTitle"><p>密码</p></div>
        <n-input
          type="password"
          show-password-on="mousedown"
          placeholder="请输入密码"
          clearable
        />
      </div>
      <div class="secPassword">
        <div class="inputTitle"><p>确认密码</p></div>
        <n-input
          type="password"
          show-password-on="mousedown"
          placeholder="请输入密码"
          clearable
        />
      </div>
      <div class="email">
        <div class="inputTitle"><p>邮箱</p></div>
        <n-input type="text" placeholder="请输入邮箱" clearable />
      </div>
      <div class="emailCode">
        <div class="inputTitle"><p>邮箱验证码</p></div>
        <n-input-group>
          <n-input type="text" placeholder="请输入邮箱验证码" clearable />
          <n-button type="primary" ghost> 发送验证码 </n-button>
        </n-input-group>
      </div>
      <div class="elua"></div>
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
@import "../../style/auth/register.css";
</style>
