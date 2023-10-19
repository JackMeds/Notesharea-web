<template>
  <div class="px-10 bg-white min-w-max select-none flex flex-col justify-center">
    <div class="flex flex-row ">
      <div class="navbar_left basis-1/3">
        <ul class="flex flex-row">
          <li class="">
            <router-link to="/">
              <img src="/images/logo.png" class="logoImg">
            </router-link>
          </li>
          <li class="ml-4 text-xl font-bold"><router-link to="/">NoteSharea</router-link></li>
          <li class="ml-10"><router-link to="/">首页</router-link></li>
          <li class="ml-10"><router-link to="/">排行榜</router-link></li>
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
                <img class="img_login" :src="picture" alt="" :style="imageStyle" @mouseover="showHoverContent">
              </div>
              <div class="loginText" @click="toLogin()" v-show="loginText">
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
                      <img src="/images/uncollect.svg" alt="">
                      <span>我的收藏</span>
                    </div>
                    <div class="itemImg">
                      <img src="/images/inright.svg" alt="">
                    </div>
                  </div>
                  <!-- 推荐服务 -->
                  <div class="item" @click="toRecommend">
                    <div class="itemImg">
                      <img src="/images/unlike.svg" alt="">
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
          <li class="mr-10" @mouseover="showCollect">
            <router-link to="">收藏</router-link>

            <!-- 显示隐藏的收藏列表 -->
            <div class="showCollect" :style="showCollectStyle" @mouseleave="hideCollect">
              <div class="collectList">
                <div class="collectItem" v-for="(item,index) in collectList" :key="index">
                  <div class="collectLeft">
                    <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" alt="" class="collectImg">
                  </div>
                  <div class="collectRight">
                    <div class="collectTitle">{{ item.note.title }}</div>
                    <div class="collectAuthor">{{ item.note.user.nickName }}</div>
                  </div>
                </div>
              </div>
            </div>

          </li>
          <li class="mr-10"><router-link to="">历史</router-link></li>
          <li class="">
            <div class="createBtn" @click="toCreate()">
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
import { ref, onUpdated, getCurrentInstance, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Cookies from "js-cookie";
import { isLogin } from '../js/isLogin.js'
const loginInfo = ref(isLogin());
const router = useRouter();
const proxy = getCurrentInstance().proxy;

//接收父组件传递的值
const props = defineProps({
  LoginInfo: {
    type: Object
  }
})

//如果isLogin的的值为true，显示头像，否则显示登录
const loginImg = ref(false);
const loginText = ref(true);
console.log('nav', loginInfo.value.userInfo)

if (props.LoginInfo.isLogin) {
  loginImg.value = true;
  loginText.value = false;
} else {
  loginImg.value = false;
  loginText.value = true;
}

//如果图片为空，设置默认值
const picture = ref("");
if (props.LoginInfo.isLogin == false) {
  picture.value = "";
} else {
  picture.value = props.LoginInfo.userInfo.picture;
}
//如果昵称为空，设置默认值
const nickName = ref("");
if (props.LoginInfo.isLogin == false) {
  nickName.value = "未登录";
} else {
  nickName.value = props.LoginInfo.userInfo.nickName;
}

//如果个人简介为空，设置默认值
console.log('intro', props.LoginInfo.userInfo)
console.log('intros', props.LoginInfo.isLogin)
const userIntro = ref("");
// if (props.LoginInfo.isLogin == true && props.LoginInfo.userInfo.userIntro == null ) {
//   userIntro.value = "这个人很懒，什么都没有留下";
// } else {
//   userIntro.value = props.LoginInfo.userInfo.userIntro;
// }
// if (props.LoginInfo.isLogin == false && props.LoginInfo.userInfo.userIntro != null) {
//   userIntro.value = props.LoginInfo.userInfo.userIntro;
// } else {
//   userIntro.value = "这个人很懒，什么都没有留下";
// }
if (props.LoginInfo.isLogin && props.LoginInfo.userInfo && props.LoginInfo.userInfo.userIntro) {
  userIntro.value = props.LoginInfo.userInfo.userIntro;
} else {
  userIntro.value = "这个人很懒，什么都没有留下";
}

//跳转到登录页面
function toLogin() {
  router.push('/auth/login');
}

//跳转到首页
function toHome() {
  router.push('/');
}

//跳转到发布笔记页面
function toCreate() {
  router.push('/create');
}


const isHovered = ref(false);
const imageStyle = ref({ transform: '', transition: '' });
const showHoverStyle = ref({ display: 'none', zIndex: -1 });
const showCollectStyle = ref({ display: 'none', zIndex: -1 });


//显示个人中心隐藏内容
function showHoverContent() {
  isHovered.value = true;
  imageStyle.value = {
    transform: 'scale(2.0) translateY(10px) translateX(-8px)',
    transition: 'transform 0.3s ease-out'
  };
  showHoverStyle.value = { display: 'block', zIndex: -1 };

}

//隐藏个人中心隐藏内容
function hideHoverContent() {
  isHovered.value = false;
  imageStyle.value = { transform: 'scale(1) translateY(0)', transition: 'transform 0.3s ease-out' };
  showHoverStyle.value = { display: 'none', zIndex: -1 };
}


//显示收藏内容
function showCollect() {
  getCollectList();
  showCollectStyle.value = { display: 'block', zIndex: -1 };
}

//隐藏收藏内容
function hideCollect() {
  showCollectStyle.value = { display: 'none', zIndex: -1 };
}

//收藏列表
const collectList =ref( [
{
    note: {
      title: "",
      user: {
        nickName: ""
      }
    }
  }
]);



// 添加一个标志来控制是否已经获取过收藏列表
// const hasFetchedCollectList = ref(false);
// onUpdated(() => {
//   // 确保只在登录且未获取过列表时调用获取列表函数
//   if (props.LoginInfo.isLogin && !hasFetchedCollectList.value) {
//     getCollectList();
//     // 设置标志为true，表示已经获取过列表
//     hasFetchedCollectList.value = true;
//   }
// });
//获取用户收藏笔记的列表，包括笔记图片，笔记标题，笔记作者
function getCollectList() {
  proxy.$http
    .get("http://localhost:3000/api/note/getCollectNoteList", {
      params: {
        userId: props.LoginInfo.userInfo.id,
      },
    })
    .then((response) => {
      console.log(response.data.data[0].note.user.nickName);

      if (response.data.code == 0) {
        //获取成功
        collectList.value = response.data.data;

        console.log(response.data.data);
      }
      else {
        //获取失败
        alert("获取收藏列表失败");
      }
    });
}



//跳转到个人中心
function toPersonalCenter() {
  router.push('/accountCenter');
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
  //删除服务器端session
  proxy.$http
    .post("http://localhost:3000/api/user/logout", {}, { withCredentials: true })
    .then((response) => {
      console.log(response.data);
      if (response.data.code == 0) {
        //删除cookie
        Cookies.remove('userInfo');
        isHovered.value = false;
        loginImg.value = false;
        loginText.value = true;
        //路由跳转回首页
        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      else {
        //退出登录失败
        alert("退出登录失败");
      }
    });
}
</script>


<style>
.navbar_left .logoImg {
  @apply w-12;
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

.loginText {
  @apply text-xs border-solid border-2 rounded-full border-gray-500 w-8 h-8 z-10 flex justify-center items-center cursor-pointer;

  span {
    @apply leading-8;
  }
}

.navbar_right {
  @apply flex flex-row justify-end items-center;
  .loginImg {

    .img_login {
      @apply border-solid border-2 border-gray-500 bg-white rounded-full w-8 h-8 m-auto z-10;
    }
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

.showCollect {
  @apply flex absolute w-60 top-12 border border-black bg-white z-0;

  .collectList {
    @apply flex flex-col w-full;

    .collectItem {
      @apply flex flex-row justify-between items-center px-2 py-2 border-b border-gray-300;

      .collectLeft {
        .collectImg {
          @apply h-10 aspect-[4/3] rounded-sm overflow-hidden cursor-pointer;
        }
      }

      .collectRight {
        @apply flex flex-grow flex-col justify-between ml-2;

        .collectTitle {
          @apply text-sm;
        }

        .collectAuthor {
          @apply text-xs text-gray-400;
        }
      }
    }
  }
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
