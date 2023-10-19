<template>
  <div class="leftList">
    <div class="listItem" v-for="(item, index) in list" :key="index">
      <button
        :class="[
          'leftList_btn',
          {
            'first-button': index === 0,
            'last-button': index === list.length - 1,
          },
        ]"
        @click="navigateTo(item.url)"
      >
        {{ item.title }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "indexLeftList",
  setup() {
    const list = ref([
      {
        title: "综合",
        url: "/comprehensive", // 设置每个按钮的URL
      },
      {
        title: "关注",
        url: "/follow",
      },
      {
        title: "高中分区",
        url: "/categories",
      },
      {
        title: "大学分区",
        url: "/categories",
      },
      {
        title: "运动分区",
        url: "/categories",
      },
      {
        title: "前端分区",
        url: "/categories",
      },
      {
        title: "后端分区",
        url: "/categories",
      },
    ]);

    function navigateTo(url) {
      // 处理页面导航逻辑，可以使用 Vue Router 或其他导航方法
      // 例如：this.$router.push(url);
    }

    return {
      list,
      navigateTo,
    };
  },
};
</script>

<style>
  .leftList{
    @apply w-full;
    .listItem{
      @apply w-full;
      .leftList_btn{
        @apply w-full lg:h-12 h-8 text-center text-black bg-white hover:bg-gray-50 border border-black rounded-sm mb-1;
        /* &.first-button{
          
        } */
        &.last-button{
          @apply mb-0;
        }
      }
    }
  }
</style>
