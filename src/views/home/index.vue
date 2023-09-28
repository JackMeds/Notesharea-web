<template>
  <div class="px-10 w-full headerNav">
    <div class="flex flex-row mt-4">
      <div class="navbar_logo basis-2/14">
        <img src="/images/logo.png" alt="">
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
          <img class="mr-2" src="/images/search.svg" alt="" @click="search">
        </div>

      </div>
      <div class="navbar_login basis-1/14">
        <img class="img_login" src="/images/login.jpg" alt="" :style="imageStyle"
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
  <div class="main">
    <div class="leftListWrapper">
      <indexleftlist class="left" :style="leftListStyle" />
    </div>
    <indexrightlist class="right" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import indexleftlist from "../../components/indexLeftList.vue";
import indexrightlist from "../../components/indexRightList.vue";
import headerNav from "../../components/nav.vue";

//导航栏的js代码
const isHovered = ref(false);
const imageStyle = ref({});
// imageStyle: {},
//鼠标悬浮显示个人中心
function showHoverContent() {
  // console.log('鼠标悬浮');
  isHovered.value = true;
  // console.log(isHovered.value);
  imageStyle.value = { transform: 'scale(2.0)', transition: 'transform 0.3s ease-out' };
}

//鼠标离开隐藏个人中心
function hideHoverContent() {
  // console.log('鼠标离开');
  isHovered.value = false;
  imageStyle.value = { transform: 'scale(1)', transition: 'transform 0.3s ease-out' };
}


//贺舜源的js代码，待修改
// const penjingHeight = ref(0);

// onMounted(() => {
//   // 获取penjing元素的高度
//   const penjingElement = document.querySelector(".penjing");
//   penjingHeight.value = penjingElement.offsetHeight;

//   // 监听窗口滚动事件以更新left元素的样式
//   window.addEventListener("scroll", updateLeftListStyle);
// });

// const updateLeftListStyle = () => {
//   // 当滚动到penjing元素的位置时，将left元素的样式设置为固定定位
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//   const leftElement = document.querySelector(".left");

//   if (window.innerWidth <= 768) {
//     leftElement.style.display = "none"; // 隐藏左侧列表
//   } else {
//     leftElement.style.display = "block"; // 显示左侧列表
//     leftElement.style.position =
//       scrollTop >= penjingHeight.value ? "fixed" : "static";
//     leftElement.style.top = scrollTop >= penjingHeight.value ? "0" : "auto";
//   }
// };
</script>

<style scoped>
@import "../../style/home/nav.css";
.headerNav {
  @apply w-full z-50 fixed top-0 left-0 right-0;
}
.main {
  @apply container flex;
}

.left {
  float: left;
  position: fixed;
  margin-top: 20px;
}

.right {
  float: right;
}

@media (max-width: 768px) {
  .left {
    display: none;
  }
}
</style>
