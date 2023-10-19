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
          <img src="../../assets/images/tuxiang1.png" alt="" @click="toNote(item.noteId)"/>
        </div>
        <div class="text">
          <span class="Title" @click="toNote(item.noteId)">{{ item.note.title }}</span><br>
          <span class="UserName" @click="toNote(item.authorId)">{{ item.note.user.nickName }}</span>
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
  const res = await axios.get("http://localhost:3000/api/note/recommendList");
  console.log(res.data.data);
  leftList.value = res.data.data;
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
