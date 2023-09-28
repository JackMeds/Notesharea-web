<template lang="">
  <div class="textList">
    <div class="textListItem" v-for="item in textList">
      <div class="textListItemLeft">
        <div class="textListItemLeftImg">
          <img :src="item.imgurl" alt="" />
        </div>
      </div>
      <div class="textListItemContent">
        <div class="textListItemheader">
          <div class="textListItemContentTitle">
            <span>{{ item.title }}</span>
          </div>
          <div class="textListItemContentText">
            <span>{{ item.intro }}</span>
          </div>
          <div class="textListItemContentInfo">
            <span class="username">{{ item.username }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
        </div>
        <div class="textListItemFooter">
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <span>点赞 {{ item.like }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <span>收藏 {{ item.collect }}</span>
            </div>
          </div>
          <div class="textListItemFooterItem">
            <div class="textListItemFooterItemText">
              <span>评论 {{ item.comment }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

//列表数据
const textList = ref([
  {
    id: 1,
    title: "高等数学-不定积分",
    username: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
  {
    id: 2,
    title: "高等数学-不定积分",
    username: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
  {
    id: 3,
    title: "高等数学-不定积分",
    username: "贺大爷",
    date: "2021-10-10",
    intro:
      "这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享，这是高等数学不定积分笔记的分享",
    imgurl: "/images/tuxiang1.png",
    like: 808,
    collect: 808,
    comment: 808,
  },
]);
</script>
<style>
.textList {
  @apply w-full;
  .textListItem {
    @apply w-full flex mb-2 last:mb-0;
    .textListItemLeft {
      @apply w-1/4;
      .textListItemLeftImg {
        @apply w-full;
        img {
          @apply aspect-[4/3];
        }
      }
    }
    .textListItemContent {
      @apply w-3/4 flex flex-col justify-between ml-2;
      .textListItemheader {
        .textListItemContentTitle {
          @apply mb-2;
          span {
            @apply text-2xl;
          }
        }
        .textListItemContentText {
          span {
            @apply text-sm text-gray-500;
          }
        }
        .textListItemContentInfo {
          .username {
            @apply text-xs text-gray-400;
          }
          .date {
            @apply text-xs text-gray-400 ml-4;
          }
        }
      }
      .textListItemFooter {
        @apply w-full flex mb-3;
        .textListItemFooterItem {
          @apply mx-5;
          .textListItemFooterItemText {
            @apply w-full;
            span {
              @apply text-sm;
            }
          }
        }
      }
    }
  }
}
</style>
