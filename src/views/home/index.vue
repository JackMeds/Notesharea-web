<template>
  <div class="page-container">
    <headerNav class="headerNav" :class="{ 'shadow-lg': isScrolled }" :LoginInfo="LoginInfo" />
    <div class="headerNull"></div>
    <div class="mainList">
      <div class="leftList">
        <indexleftlist class="indexleftlist" />
      </div>
      <div class="rightList">
        <indexrightlist class="indexrightlist" />
        <indexTextList class="indexTextList" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from "vue";
import headerNav from "../../components/nav.vue";
import indexleftlist from "../../components/index/indexLeftList.vue";
import indexrightlist from "../../components/index/indexRightList.vue";
import indexTextList from "../../components/index/indexTextList.vue";

import { isLogin } from "../../js/isLogin"

// console.log(isLogin());


const LoginInfo = ref("");
// 使用 isLogin 函数进行登录状态检查
isLogin().then((res) => {
  console.log(res);
  LoginInfo.value = res; // 将值保存到LoginInfo
}).catch((err) => {
  console.log(err);
});



const isScrolled = ref(false);

// 监听页面滚动事件
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

// 在组件挂载时添加滚动事件监听
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

</script>

<style scoped>
/* @import "../../style/home/nav.css"; */
.page-container {
  background-color: #ffffff;
}

.headerNav {
  @apply w-full h-16 z-50 fixed top-0 left-0 right-0;
}

.headerNull {
  @apply w-full h-16;
}

.mainList {
  @apply container mx-auto flex;

  .leftList {
    @apply w-1/6 max-xl:text-sm max-lg:text-xs max-md:hidden flex-auto m-0 px-1;

    .indexleftlist {
      @apply w-full mt-4 sticky top-24;
    }
  }

  .rightList {
    @apply md:w-5/6 w-full flex-auto px-4;

    .indexTextList {
      @apply w-full mx-4 my-4;
    }
  }
}
</style>
