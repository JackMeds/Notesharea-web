<template>
   <div class="aside">
      <div class="asideList">
         <div class="asideItem">
            <router-link to="/accountCenter">
               <span>帐号设置</span>
            </router-link>
         </div>
         <div class="asideItem">
            <router-link to="/accountCenter/accountNotes">
               <span>我的笔记</span>
            </router-link>
         </div>
         <div class="asideItem">
            <router-link to="/accountCenter">
               <span>通用设置</span>
            </router-link>
         </div>
         <div class="asideItem">
            <router-link to="/accountCenter">
               <span>消息设置</span>
            </router-link>
         </div>

      </div>

   </div>
</template>
  
<script setup>

</script>
<style scoped>
.aside {
   @apply flex flex-col;
   .asideList {
      @apply flex flex-col;
      .asideItem {
         @apply flex flex-row items-center justify-center hover:bg-gray-100 first:rounded-t-md;
         height: 50px;
         span {
            @apply text-base;
         }
      }
   }
}
</style>