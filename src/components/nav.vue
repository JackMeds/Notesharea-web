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
          <!-- <li class="ml-10"><router-link to="">{{props.LoginInfo}}</router-link></li> -->
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
            <div class="loginContent">
              <div class="loginImg" v-show="loginImg">
                <img class="img_login" src="/images/login.jpg" alt="" :style="imageStyle" @mouseover="showHoverContent">
              </div>
              <div class="loginWord" @click="toLogin()" v-show="loginWord">
                <span>登录</span>
              </div>

            </div>
            <!-- 显示隐藏内容 -->
            <div class="hover-content showHover" :style="showHoverStyle" @mouseleave="hideHoverContent">
              <div class="hover-content-item mt-8">
                <div class="flex username">
                  <span>{{ nickName }}</span>
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
                  <p class="text-left">{{ userIntro }}</p>
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
                  <div class="item" @click="doLogout">
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
import { ref, defineProps, onUpdated, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from "js-cookie";

const router = useRouter();

const props = defineProps({
  LoginInfo: {
    type: Object
  }

})

//如果isLogin的的值为true，显示头像，否则显示登录
const loginImg = ref(false);
const loginWord = ref(true);
console.log(props.LoginInfo.userInfo)

if (props.LoginInfo.isLogin) {
  loginImg.value = true;
  loginWord.value = false;
} else {
  loginImg.value = false;
  loginWord.value = true;
}

//如果昵称为空，设置默认值
const nickName = ref("");
if (props.LoginInfo.isLogin == false) {
  nickName.value = "未登录";
} else {
  nickName.value = props.LoginInfo.userInfo.nickName;
}

//如果个人简介为空，设置默认值
const userIntro = ref("");
if (props.LoginInfo.isLogin.userIntro == null) {
  userIntro.value = "这个人很懒，什么都没有留下";
} else {
  userIntro.value = props.LoginInfo.userInfo.userIntro;
}


//跳转到登录页面
function toLogin() {
  router.push('/auth/login');
}


const isHovered = ref(false);
const imageStyle = ref({ transform: '', transition: '' });
const showHoverStyle = ref({ display: 'none', zIndex: -1 });


//显示隐藏内容
function showHoverContent() {
  isHovered.value = true;
  imageStyle.value = {
    transform: 'scale(2.0) translateY(10px) translateX(-8px)',
    transition: 'transform 0.3s ease-out'
  };
  showHoverStyle.value = { display: 'block', zIndex: -1 };

}

//隐藏隐藏内容
function hideHoverContent() {
  isHovered.value = false;
  imageStyle.value = { transform: 'scale(1) translateY(0)', transition: 'transform 0.3s ease-out' };
  showHoverStyle.value = { display: 'none', zIndex: -1 };
}

//跳转到个人中心
function toPersonalCenter() {
  router.push('/personalCenter');
}
//跳转到我的收藏
function toCollect() {
  router.push('/collect');
}
//跳转到推荐服务
function toRecommend() {
  router.push('/recommend');
}
//退出登录
function doLogout() {
  //删除cookie
  Cookies.remove('userInfo');
  //页面刷新
  window.location.reload();
}
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

.loginWord {
  @apply text-xs border-solid border-2 rounded-full border-gray-500 w-8 h-8 z-10 flex justify-center items-center cursor-pointer;

  span {
    @apply leading-8;
  }
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
