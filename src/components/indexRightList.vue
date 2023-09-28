<template>
  <div class="index_topRightlist">
    <div class="topNav">
      <p class="topNavTitle">随便看看</p>
      <button class="change">换一换</button>
    </div>
    <div class="index_Imglist">
      <!-- 内容图片及内容 -->
      <div class="Imglist" v-for="(item, index) in leftList" :key="index">
        <div class="listItemPic">
          <img :src="item.imgurl" alt="" />
        </div>
        <div class="text">
          <p class="Title">{{ item.title }}</p>
          <p class="UserName">{{ item.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import imglocal from "../assets/images/tuxiang1.png";
export default {
  name: "indexRightList",
  setup() {
    const leftList = ref([
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        imgurl: imglocal,
      },
    ]);
    return {
      leftList,
    };
  },
};
</script>

<style>
.index_topRightlist {
  @apply w-full;
}
.topNav {
  @apply flex-1 flex justify-between items-center;
  .change {
    @apply border border-black px-1 text-sm rounded-lg bg-white;
  }
}
.index_Imglist {
  @apply flex flex-wrap justify-between mt-4;
  .Imglist {
    @apply md:w-1/4 w-1/2 flex flex-col items-center;
    .listItemPic {
      @apply w-11/12;
      img {
        @apply aspect-[4/3] w-full;
      }
    }
    .text {
      @apply w-11/12 mt-2;
      .Title {
        @apply text-sm;
      }
      .UserName {
        @apply text-gray-400 text-xs;
      }
    }
  }
}
</style>
