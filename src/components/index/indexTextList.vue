<template lang="">
  <div class="textList">
    <div class="textListItem" v-for="item in textList">
      <div class="textListItemLeft">
        <div class="textListItemLeftImg" @click="toNote(item.noteId)">
          <img :src="item.imgurl" alt="" />
        </div>
      </div>
      <div class="textListItemContent">
        <div class="textListItemheader">
          <div class="textListItemContentTitle">
            <span @click="toNote(item.noteId)">{{ item.title }}</span>
          </div>
          <div class="textListItemContentText">
            <span @click="toNote(item.noteId)">{{ item.intro }}</span>
          </div>
          <div class="textListItemContentInfo">
            <span class="username" @click="toNote(item.authorId)">{{ item.username }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
        <div class="textListItemFooter">
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/like.svg" alt="">
              <span>{{ item.like }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/collect.svg" alt="">
              <span>{{ item.collect }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <img src="/images/comment.svg" alt="">
              <span>{{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router"; // 引入useRouter

// 路由
const router = useRouter();

//列表数据
const textList = ref([
  {
    noteId: 1,
    title: "高等数学-不定积分",
    authorName: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
  {
    noteId: 2,
    title: "高等数学-不定积分",
    authorName: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
  {
    noteId: 3,
    title: "高等数学-不定积分",
    authorName: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
]);

//跳转到笔记详情页
const toNote = (noteId) => {
  router.push("/note/" + noteId);
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
            @apply text-xs text-gray-400 ;
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
