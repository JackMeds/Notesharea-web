<template>
  <div class="leftList shadow-2xl">
    <div v-for="(item, index) in list" :key="index">
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
        title: "分类",
        url: "/categories",
      },
      {
        title: "分类",
        url: "/categories",
      },
      {
        title: "分类",
        url: "/categories",
      },
      {
        title: "分类",
        url: "/categories",
      },
      {
        title: "分类",
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
a {
  text-decoration: none;
}
.leftList {
  width: 180px;
  margin-left: 90px;
}
.leftList .leftList_btn {
  width: 160px;
  height: 50px;
  margin-left: 10px;
}
.leftList .leftList_btn:hover {
  background-color: #eaf2ff;
  color: #1e80ff;
}
.leftList_btn.first-button {
  margin-top: 20px;
}
.leftList_btn.last-button {
  margin-bottom: 0px;
}
</style>
