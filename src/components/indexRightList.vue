<template>
  <div class="index_topRightlist">
    <div class="index_Imglist">
      <!-- 内容右边图片及内容 -->
      <a href="">
        <div class="right_Imglist">
          <img src="../assets/images/tuxiang1.png" alt="" class="r_img" />
          <div class="r_List justify-center">
            <p class="r_Title text-3xl">特工易冷</p>
            <p class="r_UserName text-xl text-slate-500">贺大爷</p>
            <p class="r_Synopsis truncate text-slate-500">
              hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            </p>
          </div>
        </div>
      </a>
      <!-- 内容左边图片及内容 -->
      <a href="">
        <div
          class="left_Imglist"
          v-for="(item, index) in leftList"
          :key="index"
        >
          <img :src="item.imgurl" alt="" class="l_img" />
          <div class="l_List justify-center">
            <p class="l_Title">{{ item.title }}</p>
            <p class="l_UserName text-sm text-slate-500">{{ item.username }}</p>
            <p class="l_Synopsis truncate text-sm text-slate-500">
              {{ item.synopsis }}
            </p>
          </div>
        </div>
      </a>
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
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
      {
        title: "特工易冷",
        username: "贺大爷",
        synopsis:
          "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        imgurl: imglocal,
      },
    ]);
    return {
      leftList,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.index_topRightlist {
  width: 1450px;
  height: 700px;
  margin-right: 90px;
  display: flex; /* 使用Flex布局 */
}

/* 内容右边图片及内容的css */
.right_Imglist {
  margin-top: 60px;
  background-color: #fafafa;
  width: 380px;
  height: 600px;
  /* 不做任何定位或偏移，保持容器位置不变 */
  float: left;
}
.right_Imglist .r_img {
  width: 360px;
  margin: auto; /* 在Flex容器中水平和垂直居中对齐图片 */
  display: block; /* 去除默认行内元素间隙 */
  padding-top: 4px;
}
.right_Imglist .r_List {
  width: 220px;
  margin-left: 10px;
}
.right_Imglist .r_UserName {
  margin-top: 6px;
}
.right_Imglist .r_Synopsis {
  margin-top: 10px;
}

/* 内容左边图片及内容的css */
.left_Imglist {
  background-color: #fafafa;
  margin-top: 60px;
  margin-left: 10px;
  background-color: #fafafa;
  width: 180px;
  height: 270px;
  /* 不做任何定位或偏移，保持容器位置不变 */
  float: right;
}
.left_Imglist .l_img {
  width: 110px;
  margin: auto; /* 在Flex容器中水平和垂直居中对齐图片 */
  display: block; /* 去除默认行内元素间隙 */
  padding-top: 4px;
}
.left_Imglist .l_List {
  width: 110px;
  margin-left: 4px;
}
.left_Imglist .l_UserName {
  margin-top: 3px;
}
.left_Imglist .l_Synopsis {
  margin-top: 4px;
}
</style>
