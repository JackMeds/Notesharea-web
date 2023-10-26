<template>
  <div class="index_topRightlist">
    <div class="topNav">
      <p class="topNavTitle">随便看看</p>
      <button class="change">换一换</button>
    </div>
    <div class="index_Imglist">
      <!-- 内容图片及内容 -->
      <div class="Imglist" v-for="(item, index) in leftList.slice(0, 8)" :key="index">
        <div class="listItemPic">
          <img :src="item.img" alt="" @click="toNote(item.id)"/>
        </div>
        <div class="text">
          <span class="Title" @click="toNote(item.id)">{{ item.title }}</span><br>
          <span class="UserName" @click="toNote(item.id)">{{ item.user.nickName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";// 引入useRouter
import axios from "axios"; 
// 路由
const router = useRouter();

const leftList = ref([]);

//获取数据库推荐列表
const getLeftList = async () => {
  const res = await axios.get("http://localhost:3000/api/note/allNotes");
  console.log(res.data.data);
  leftList.value = res.data.data;
//   {
//     "id": 2,
//     "title": "别找了！前端那些好用的网站都在这里了！",
//     "content": "一、渐变神器Gradient\n\n网站地址：\nGradient by ShapeFactory | Chromatic Gradient Generator\n网站介绍：\nGradient是一款网页渐变设计工具，可以帮助用户轻松创建漂亮的渐变颜色样式，并将其应用到网页、APP等设计项目中。\n\n作者：泽南Zn\n链接：https://juejin.cn/post/7289339080838627382\n\n二、两款阴影工具在线网站\n\n网站地址：\n1、lingdaima在线阴影创建：在线创建可视化CSS阴影效果神器 \n2、box-shadow阴影网站：CSS box shadow inspiration - Box Shadow\n网站介绍：\n1、lingdaima是一款在线阴影创建工具，可以帮助用户快速地生成各种类型的阴影效果，并且提供多种自定义选项和实时预览功能。以下是该工具的主要特点和使用方法：\n特点：\n\n界面简洁易用，支持拖拽、滑动等操作；\n提供多种阴影类型，包括内部阴影、外部阴影、立体阴影等；\n可以自定义阴影属性，如颜色、大小、模糊度、位置等；\n支持将生成的阴影效果导出为CSS代码或PNG图片格式。\n\n2、box-shadow阴影网站，在这个网站中会按照人们对各种阴影效果的喜爱程度进行排名，相信大多数人喜欢的阴影效果，如果用在你的网站上也一定会非常的好看的。\n\n\n\n\n\n\n",
//     "img": "https://th.bing.com/th/id/R.8f221ceeaf6c01fa52586e1af0de6113?rik=vUGUDDXLg2ZxIg&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20160112%2f19439731_135448394016_2.jpg&ehk=K6lTLdD2XjV1kxOp2WzBe%2fU5Gzppy9tM9f8m52Zg0z0%3d&risl=&pid=ImgRaw&r=0",
//     "createdAt": "2023-10-17T06:48:46.000Z",
//     "user": {
//         "userName": "pj",
//         "nickName": "sakuras",
//         "picture": "https://z1.ax1x.com/2023/10/12/piSrVit.png"
//     },
//     "collects": [
//         {
//             "userId": 2,
//             "noteId": 2
//         },
//         {
//             "userId": 5,
//             "noteId": 2
//         }
//     ],
//     "comments": [
//         {
//             "id": 8,
//             "userId": 5,
//             "noteId": 2,
//             "content": "哈哈哈哈哈",
//             "createdAt": "2023-10-23T06:08:33.000Z",
//             "user": {
//                 "userName": "jackmeds",
//                 "nickName": "jackmeds",
//                 "picture": "https://z1.ax1x.com/2023/10/12/piSrVit.png"
//             },
//             "replies": [
//                 {
//                     "id": 3,
//                     "userId": 5,
//                     "commentId": 8,
//                     "content": "哈哈哈哈",
//                     "createdAt": "2023-10-23T06:08:43.000Z",
//                     "user": {
//                         "userName": "jackmeds",
//                         "nickName": "jackmeds",
//                         "picture": "https://z1.ax1x.com/2023/10/12/piSrVit.png"
//                     }
//                 }
//             ]
//         }
//     ],
//     "likes": [
//         {
//             "userId": 2,
//             "noteId": 2
//         },
//         {
//             "userId": 5,
//             "noteId": 2
//         }
//     ],
//     "recommendNote": {
//         "noteId": 2,
//         "isRecommend": true
//     }
// }
//遍历对象，如果recommendNote的isRecommend为false则删除该对象
  for (let i = 0; i < leftList.value.length; i++) {
    console.log(leftList.value[i]);
    if (leftList.value[i].recommendNote.isRecommend == false) {
      leftList.value.splice(i, 1);
      i--;
    }
  }
};
onMounted(() => {
  getLeftList();
});



// 跳转到笔记详情页
const toNote = (noteId) => {
  router.push("/note/" + noteId);
};
</script>

<style>
.index_topRightlist {
  @apply w-full;
}

.topNav {
  @apply flex-1 flex justify-between items-center;

  .change {
    @apply border border-black px-1 text-sm rounded-lg bg-white hover:bg-gray-100;
  }
}

.index_Imglist {
  @apply flex flex-wrap justify-between mt-4;

  .Imglist {
    @apply md:w-1/3 lg:w-1/4 w-1/2 flex flex-col items-center mb-2;

    .listItemPic {
      @apply w-11/12 cursor-pointer rounded-sm overflow-hidden;

      img {
        @apply aspect-[4/3] w-full;
      }
    }

    .text {
      @apply w-11/12 mt-2;

      .Title {
        @apply text-sm cursor-pointer;
      }

      .UserName {
        @apply text-gray-400 text-xs cursor-pointer;
      }
    }
  }
}</style>
