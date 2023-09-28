<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>
<script setup>
import { NConfigProvider } from "naive-ui";

/**
 * js 文件下使用这个做类型提示
 * @type import('naive-ui').GlobalThemeOverrides
 */
const themeOverrides = {
  "common": {
    "primaryColor": "#000000FF",
    "primaryColorHover": "#8C8C8CFF",
    "primaryColorPressed": "#515151FF",
    "primaryColorSuppl": "#818181FF"
  }
};
</script>
<style scoped>
</style>
