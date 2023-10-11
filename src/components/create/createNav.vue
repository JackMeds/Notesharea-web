<template>
  <div class="navContainer">
    <div class="left">
      <div class="logo">
        <router-link to="/">
          <img src="/images/logo.png" alt="" />
        </router-link>
        <h1>上传笔记</h1>
      </div>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/">我的笔记</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="user">
        <router-link to="/" v-if="props.LoginInfo.isLogin">
          <img src="/images/login.jpg" alt="" />
          <span>{{ userName }}</span>
        </router-link>
        <div class="loginWord" @click="toLogin()" v-else>
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from "js-cookie";

const router = useRouter();


//接收父组件传递的值
const props = defineProps({
  LoginInfo: {
    type: Object
  }
})

//跳转到登录页面
function toLogin() {
  router.push('/auth/login');
}

const userName = ref("未登录");
if (props.LoginInfo.isLogin) {
  userName.value = props.LoginInfo.userName;
}

</script>
<style>
.navContainer {
  @apply w-full h-14 z-50 fixed top-0 left-0 right-0 bg-white flex flex-row justify-between items-center px-10 select-none;

  .left {
    @apply flex flex-row justify-start items-center;

    .logo {
      @apply h-16 flex flex-row justify-center items-center mr-6;

      img {
        @apply w-14 mr-4;
      }

      h1 {
        @apply text-xl font-bold;
      }
    }

    ul {
      @apply flex flex-row justify-start items-center;

      li {
        @apply w-16 h-16 flex flex-row justify-center items-center;

        a {
          @apply w-full h-full flex flex-row justify-center items-center;
        }
      }
    }
  }

  .right {
    @apply flex flex-row justify-end items-center;

    .user {
      @apply w-12 h-12 flex justify-center;

      img {
        @apply object-cover h-12 w-12 rounded-full my-auto;
      }

      span {
        @apply text-sm;
      }

      .loginWord {
        @apply text-xs border-solid border-2 rounded-full border-gray-500 w-10 h-10 z-10 flex justify-center items-center cursor-pointer;

        span {
          @apply leading-8;
        }
      }
    }
  }
}
</style>
  