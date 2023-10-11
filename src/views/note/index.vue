<template>
    <div class="page-container">
        <headerNav class="headerNav" :class="{ 'shadow-lg': isScrolled }" :LoginInfo="LoginInfo" />
        <div class="headerNull"></div>
        <div class="mainContainer">
            <div class="leftContainer">
                <floatList class="floatList" />
            </div>
            <div class="content">
                <noteContent class="noteContent" />
            </div>
            <div class="rightContainer">

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";
import headerNav from "../../components/nav.vue";
import noteContent from "../../components/note/content.vue";
import floatList from "../../components/note/floatList.vue";
import { useRouter } from 'vue-router';
import Cookies from "js-cookie";

import { isLogin } from "../../js/isLogin"

const router = useRouter();

const props = defineProps({
    noteId: {
        type: Number
    }
})

// 使用 isLogin 函数进行登录状态检查,返回一个对象
const LoginInfo = ref(isLogin());

const isScrolled = ref(false);

// 监听页面滚动事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// 在组件挂载时添加滚动事件监听
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

console.log(props.noteId);
//查询笔记内容
const getNoteContent = () => {
    
}

</script>

<style>
@import "../../style/headerNav.css";

.page-container {
    background-color: #ffffff;
}


.mainContainer {
    @apply container mx-auto flex-row flex;

    .leftContainer {
        @apply w-1/12 max-xl:text-sm max-lg:text-xs max-md:hidden flex-auto m-0;
        /* .indexleftlist {
        @apply w-full mt-4 sticky top-24;
      } */
    }

    .content {
        @apply md:w-5/6 w-full flex-auto;

        .noteContent {
            @apply w-full;
        }
    }

    .rightContainer {
        @apply w-1/12 max-xl:text-sm max-lg:text-xs max-md:hidden flex-auto m-0;
        /* .indexleftlist {
        @apply w-full mt-4 sticky top-24;
      } */
    }
}

.floatList {
    @apply fixed bottom-6;
}
</style>
