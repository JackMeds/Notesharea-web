<template>
  <div class="container px-10 w-full">
    <div class="flex flex-row mt-4">
      <div class="navbar_logo basis-2/14">
        <img src="../../public/images/logo.png" alt="">
      </div>
      <div class="navbar_menu basis-2/14">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">排行榜</a></li>
        </ul>
      </div>
      <div class="navbar_search basis-4/14">
        <div class="search">
          <input class="search_input" type="text" placeholder="">
          <img class="mr-2" src="../../public/images/search.svg" alt="" @click="search">
        </div>

      </div>
      <div class="navbar_login basis-1/14">
        <img class="img_login" src="../../public/images/login.jpg" alt="" :style="imageStyle"
          @mouseover="showHoverContent">
        <div v-if="isHovered" class="hover-content showHover" @mouseleave="hideHoverContent">

          <div class="hover-content-item mt-5">
            <div>
              <span>sakura</span>
            </div>
            <div class="flex flex-row item_fans">
              <div class="basis-1/3">
                <a href="">
                  <p>1</p>
                  <p>关注</p>
                </a>

              </div>
              <div class="basis-1/3">
                <a href="">
                  <p>1</p>
                  <p>粉丝</p>
                </a>

              </div>
              <div class="basis-1/3">
                <a href="">
                  <p>1</p>
                  <p>发布</p>
                </a>

              </div>
            </div>
            <div class="mx-6 mt-2 bg-red-200 rounded-md">
              <span>个人简介</span>
              <p class="text-left">本人性格开朗、踏实、稳重、有活力，待人热情、真诚。</p>
            </div>
            <div class="item_list">
              <ul class="list-none">
                <li class="item_li">
                  <a href="">
                    <img class="img_left" src="/images/customer-center.svg" alt="">
                    <span>个人中心</span>
                    <img class="img_right" src="/images/inright.svg" alt="">
                  </a>

                </li>
                <li class="item_li">
                  <a href="">
                    <img class="img_left" src="/images/share.svg" alt="">
                    <span>投稿管理</span>
                    <img class="img_right" src="/public/images/inright.svg" alt="">
                  </a>
                </li>
                <li class="item_li">
                  <a href="">
                    <img class="img_left" src="/images/like.svg" alt="">
                    <span>推荐服务</span>
                    <img class="img_right" src="/images/inright.svg" alt="">
                  </a>
                </li>

                <li class="li_underline">
                </li>
                <li class="item_li mt-3 ">
                  <a href="">
                    <img class="img_left" src="/images/logout.svg" alt="">
                    <span>退出登录</span>
                    <img class="img_right" src="/images/inright.svg" alt="">
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div class="navbar_menu basis-4/14">
        <ul>
          <li><a href="">消息</a></li>
          <li><a href="">收藏</a></li>
          <li><a href="">历史</a></li>
        </ul>
      </div>
      <div class="navbar_upload basis-1/14">
        <a href="">
          <div class="upload flex flex-row">
            <div class="plus basis-1/6 ml-2 mt-1">
              <img src="/images/add-circle.svg" alt="">
            </div>
            <div class="uploads basis-5/6">
              发布笔记
            </div>

          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
const imageStyle = ref({});
// imageStyle: {},
//鼠标悬浮显示个人中心
function showHoverContent() {
  isHovered.value = true;
  imageStyle.value = { transform: 'scale(2.0)', transition: 'transform 0.3s ease-out' };
}

//鼠标离开隐藏个人中心
function hideHoverContent() {
  isHovered.value = false;
  imageStyle.value = { transform: 'scale(1)', transition: 'transform 0.3s ease-out' };
}

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped>
.navbar_logo img {
  @apply w-20;
}

.navbar_logo,
.navbar_search,
.navbar_login,
.navbar_upload,
.navbar_menu {
  @apply text-center;
}

.search {
  @apply w-80 border-solid border-2 border-gray-500 rounded-xl;
}

.search_input {
  @apply w-60 border-none outline-none;
}

.search img {
  @apply w-5 float-right;
}

.navbar_login .img_login {
  @apply border-solid border-2 border-gray-500 rounded-full w-8 h-8 m-auto;
}

.navbar_menu ul li {
  @apply float-left mr-10;
}

.navbar_menu ul {
  @apply table m-auto;

}

.upload {
  @apply w-28 border-solid border-2 border-black rounded-2xl;
}

.showHover {
  @apply w-56 absolute right-520;

}

.hover-content-item ul li .img_left {
  @apply w-5 h-5 float-left;
}

.hover-content-item ul li .img_right {
  @apply w-5 h-5 float-right;
}

.hover-content-item ul li span {
  @apply mr-10;

}

.hover-content-item .item_li {
  @apply rounded-md h-9 hover:bg-slate-100;
}

.hover-content-item ul li a {
  @apply relative top-1.5;
}

.hover-content-item .item_list {
  @apply mx-6 mt-2;
}

.li_underline {
  @apply border-b border-slate-200 mt-3 w-40;
}
</style>
