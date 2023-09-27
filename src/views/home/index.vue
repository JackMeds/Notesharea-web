<template>
  <headerNav class="headerNav"/>
  <div>

    <div class="main">
      <div class="leftListWrapper">
        <indexleftlist class="left" :style="leftListStyle" />
      </div>
      <indexrightlist class="right" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import indexleftlist from "../../components/indexLeftList.vue";
import indexrightlist from "../../components/indexRightList.vue";
import headerNav from '../../components/nav.vue'
const penjingHeight = ref(0);

onMounted(() => {
  // 获取penjing元素的高度
  const penjingElement = document.querySelector(".penjing");
  penjingHeight.value = penjingElement.offsetHeight;

  // 监听窗口滚动事件以更新left元素的样式
  window.addEventListener("scroll", updateLeftListStyle);
});

const updateLeftListStyle = () => {
  // 当滚动到penjing元素的位置时，将left元素的样式设置为固定定位
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const leftElement = document.querySelector(".left");

  if (window.innerWidth <= 768) {
    leftElement.style.display = "none"; // 隐藏左侧列表
  } else {
    leftElement.style.display = "block"; // 显示左侧列表
    leftElement.style.position = scrollTop >= penjingHeight.value ? "fixed" : "static";
    leftElement.style.top = scrollTop >= penjingHeight.value ? "0" : "auto";
  }
};
</script>

<style scoped>
.headerNav {
  @apply z-50 fixed top-0 left-0 right-0;
}
.main {
  position: relative;
  /* 设置容器为相对定位 */
}

.left {
  float: left;
  position: fixed;
  /* 设置左侧列表为固定定位 */
  margin-top: 20px;
}

.right {
  float: right;
}

@media (max-width: 768px) {
  .left {
    display: none;
    /* 在屏幕宽度小于或等于768px时隐藏左侧列表 */
  }
}
</style>
