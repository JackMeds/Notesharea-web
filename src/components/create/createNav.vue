<template>
  <div class="navContainer">
    <div class="left">
      <div class="logo">
        <router-link to="/home">
          <img src="/images/logo.png" alt="" />
        </router-link>
        <router-link to="/home">
          <h1>上传笔记</h1>
        </router-link>
      </div>
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/note">笔记</router-link>
        </li>
        <li>
          <router-link to="/create">创作</router-link>
        </li>
      </ul>
    </div>
    <div class="right">
      <div class="user">
        <router-link to="/user">
          <img src="/images/login.jpg" alt="" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

</script>
<style>
.navContainer {
  @apply w-full h-16 z-50 fixed top-0 left-0 right-0 bg-white flex flex-row justify-between items-center px-10;

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
    }
  }
}</style>
  