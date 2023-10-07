<template>
  <div class="px-10 bg-white min-w-max select-none">
    <div class="flex flex-row mt-3">
      <div class="navbar_left basis-1/3">
        <ul class="flex flex-row">
          <li class="">
            <router-link to="">
              <img src="/images/logo.png" alt="">
            </router-link>
          </li>
          <li class="ml-10"><router-link to="">首页</router-link></li>
          <li class="ml-10"><router-link to="">排行榜</router-link></li>
        </ul>
      </div>
      <div class="navbar_search basis-1/3">
        <div class="search">
          <input class="search_input" type="text" placeholder="">
          <img class="mr-2" src="/images/search.svg" alt="" @click="search">
        </div>

      </div>
      <div class="navbar_right flex basis-1/3 justify-end">
        <ul class="mr-10">
          <li>
            <router-link to="">
              <img class="img_login" src="/images/login.jpg" alt="" :style="imageStyle" @mouseover="showHoverContent">
            </router-link>
            <div class="hover-content showHover" :style="showHoverStyle" @mouseleave="hideHoverContent">
              <div class="hover-content-item mt-8">
                <div class="flex username">
                  <span>sakura</span>
                </div>
                <div class="flex flex-row item_fans">
                  <div class="basis-1/3">
                    <router-link to="">
                      <p>1</p>
                      <p>关注</p>
                    </router-link>

                  </div>
                  <div class="basis-1/3">
                    <router-link to="">
                      <p>1</p>
                      <p>粉丝</p>
                    </router-link>

                  </div>
                  <div class="basis-1/3">
                    <router-link to="">
                      <p>1</p>
                      <p>发布</p>
                    </router-link>

                  </div>
                </div>
                <div class="mx-6 mt-2 rounded-md">
                  <p class="text-left">本人性格开朗、踏实、稳重、有活力，待人热情、真诚。</p>
                </div>
                <div class="itemList">
                  <!-- 个人中心 -->
                  <div class="item" @click="toPersonalCenter">
                    <div class="itemImg">
                      <img src="/images/customer-center.svg" alt="">
                      <span>个人中心</span>
                    </div>
                    <div class="itemImg">
                      <img src="/images/inright.svg" alt="">
                    </div>
                  </div>
                  <!-- 投稿管理 -->
                  <div class="item" @click="toCollect">
                    <div class="itemImg">
                      <img src="/images/collect.svg" alt="">
                      <span>我的收藏</span>
                    </div>
                    <div class="itemImg">
                      <img src="/images/inright.svg" alt="">
                    </div>
                  </div>
                  <!-- 推荐服务 -->
                  <div class="item" @click="toRecommend">
                    <div class="itemImg">
                      <img src="/images/like.svg" alt="">
                      <span>推荐服务</span>
                    </div>
                    <div class="itemImg">
                      <img src="/images/inright.svg" alt="">
                    </div>
                  </div>
                  <!-- 退出登录 -->
                  <div class="item" @click="toRecommend">
                    <div class="itemImg">
                      <img src="/images/logout.svg" alt="">
                      <span>退出登录</span>
                    </div>
                    <div class="itemImg">
                      <img src="/images/inright.svg" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>


        <ul class="login_right flex flex-row justify-end">

          <li class="mr-10"><router-link to="">消息</router-link></li>
          <li class="mr-10"><router-link to="">收藏</router-link></li>
          <li class="mr-10"><router-link to="">历史</router-link></li>
          <li class="">
            <div class="createBtn">
              <img src="/images/add-circle.svg" alt="">
              <span>发布笔记</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const isHovered = ref(false);
const imageStyle = ref({});
const showHoverStyle = ref({ display: 'none' });
// imageStyle: {},
//鼠标悬浮显示个人中心
function showHoverContent(event) {
  isHovered.value = true;
  imageStyle.value = { transform: 'scale(2.0) translateY(10px) translateX(-8px)', transition: 'transform 0.3s ease-out' };
  showHoverStyle.value = { display: 'block', "z-index": -1 };
}

//鼠标离开隐藏个人中心
function hideHoverContent() {
  isHovered.value = false;
  imageStyle.value = { transform: 'scale(1)translateY(0)', transition: 'transform 0.3s ease-out' };
  showHoverStyle.value = { display: 'none' };
}

// function updateHoverContentPosition(event) {
//   const image = this.$refs.image;
//   if (image) {
//     const imageRect = image.getBoundingClientRect();
//     this.hoverContentStyle.top = `${imageRect.bottom}px`;
//     this.hoverContentStyle.left = `${imageRect.left + imageRect.width / 2}px`;
//   }
// }
defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style>
.navbar_left img {
  @apply w-20;
}

.navbar_left ul {
  @apply flex flex-row;
}

.navbar_left ul li {
  @apply flex flex-row justify-center items-center;
}

.navbar_search {
  @apply flex flex-row justify-center items-center;
}

.search {
  @apply w-auto border-solid border-2 border-gray-500 rounded-full flex flex-row justify-center items-center;
}

.search_input {
  @apply w-80 border-none outline-none ml-3 h-6;
}

.search img {
  @apply w-5 float-right;
}

.navbar_right .login_left {
  @apply flex flex-row justify-center items-center;
}

.navbar_right .login_right li {
  @apply flex flex-row justify-center items-center;
}

.navbar_right {
  .img_login {
    @apply border-solid border-2 border-gray-500 rounded-full w-8 h-8 m-auto z-10;
  }
}

.createBtn {
  @apply h-7 flex border bg-white border-2 border-black rounded-2xl px-2 my-auto hover:cursor-pointer;

  img {
    @apply w-4 h-6 ml-2;
  }

  span {
    @apply leading-6 px-2;
  }
}

.upload {
  @apply w-28 border-solid border-2 border-black rounded-2xl;
}

.showHover {
  @apply absolute w-60 top-12 border border-black rounded-md -translate-x-1/2 bg-white z-0;

}

.showHover .username {
  @apply flex flex-row justify-center items-center;
}

.showHover .item_fans a {
  @apply flex flex-row justify-center items-center;
}

.itemList {
  @apply flex flex-col w-9/12 mx-auto my-4;

  .item {
    @apply flex flex-row justify-between items-center mt-2 cursor-pointer rounded-md active:text-blue-500 select-none;

    .itemImg {
      @apply flex;

      img {
        @apply w-6 h-6 ml-6;
      }

      span {
        @apply ml-4;
      }
    }

    .itemCenter {
      @apply flex;
    }
  }

}
</style>
