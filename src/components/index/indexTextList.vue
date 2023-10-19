<template lang="">
  <div class="textList">
    <div class="textListItem" v-for="item in textList">
      <div class="textListItemLeft">
        <div class="textListItemLeftImg" @click="toNote(item.id)">
          <img :src="item.img" alt="" />
        </div>
      </div>
      <div class="textListItemContent">
        <div class="textListItemheader">
          <div class="textListItemContentTitle">
            <span @click="toNote(item.id)">{{ item.title }}</span>
          </div>
          <div class="textListItemContentText">
            <span @click="toNote(item.id)">{{
              truncateText(item.content, 50)
            }}</span>
          </div>
          <div class="textListItemContentInfo">
            <span class="username" @click="toNote(item.id)">{{
              item.user.nickName
            }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
        <div class="textListItemFooter">
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/unlike.svg" alt="" />
              <span>{{ item.like }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/uncollect.svg" alt="" />
              <span>{{ item.collect }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/comment.svg" alt="" />
              <span>{{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // 引入useRouter
import axios from "axios";

// 路由
const router = useRouter();

//列表数据
const textList = ref([]);

const fetchDataFromDatabase = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/note/allNotes");
    // console.log(response.data.data.map(item => item.user.nickName));
    textList.value = response.data.data; // 假设响应数据包含一个名为 "data" 的数组
    console.log(textList.value);
  } catch (error) {
    console.error("Failed to fetch data from the database:", error);
  }
};

onMounted(() => {
  fetchDataFromDatabase();
});

//跳转到笔记详情页
const toNote = (noteId) => {
  router.push("/note/" + noteId);
};

// 定义常量 truncateText 方法
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "..."; // 使用省略号代替
  }
  return text;
};
</script>
<style>
.textList {
  @apply w-full;
  .textListItem {
    @apply w-full flex mb-2 last:mb-0;
    .textListItemLeft {
      @apply w-1/4;
      .textListItemLeftImg {
        @apply aspect-[4/3] w-full rounded-sm overflow-hidden cursor-pointer;
        img {
          @apply w-full h-full object-cover object-center;
        }
      }
    }
    .textListItemContent {
      @apply w-3/4 flex flex-col justify-between ml-2;
      .textListItemheader {
        .textListItemContentTitle {
          @apply mb-2;
          span {
            @apply text-2xl cursor-pointer;
          }
        }
        .textListItemContentText {
          span {
            @apply text-sm text-gray-500  cursor-pointer;
          }
        }
        .textListItemContentInfo {
          .username {
            @apply text-xs text-gray-400;
          }
          .date {
            @apply text-xs text-gray-400;
          }
        }
      }
      .textListItemFooter {
        @apply w-full flex mb-3;
        .textListItemFooterItem {
          @apply mr-6 mt-1;
          .textListItemFooterItemText {
            @apply w-full flex justify-center items-center;
            img {
              @apply w-5 h-5 mr-1;
            }
            span {
              @apply text-xs;
            }
          }
        }
      }
    }
  }
}
</style>
