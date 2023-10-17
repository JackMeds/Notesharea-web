<template>
    <div class="page-container">
        <headerNav class="headerNav" :class="{ 'shadow-lg': isScrolled }" :LoginInfo="LoginInfo" />
        <div class="headerNull"></div>
        <div class="mainContainer">
            <div class="leftContainer">
                <floatList class="floatList" :noteInfo="noteInfo" :LoginInfo="LoginInfo" v-if="floatListLoaded"/>
            </div>
            <div class="content">
                <noteContent class="noteContent" :noteInfo="noteInfo" :LoginInfo="LoginInfo" v-if="noteInfoLoaded"/>
            </div>
            <div class="rightContainer">

            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, defineProps, getCurrentInstance, watch } from "vue";
import headerNav from "../../components/nav.vue";
import noteContent from "../../components/note/content.vue";
import floatList from "../../components/note/floatList.vue";
import { useRouter } from 'vue-router';

import { isLogin } from "../../js/isLogin"

// 使用 isLogin 函数进行登录状态检查,返回一个对象
const LoginInfo = ref(isLogin());

const router = useRouter();
const proxy = getCurrentInstance().proxy;

const props = defineProps({
    noteId: {
        type: String
    }
})


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
const noteInfo = ref({});
const noteInfoLoaded = ref(false);
const floatListLoaded = ref(false);

const getNoteContent = async () => {
    try {
        await proxy.$http
            .get("http://localhost:3000/api/note/detail", {
                params: {
                    noteId: props.noteId
                }
            })
            .then((res) => {
                console.log(res);
                noteInfo.value = res.data.data;
            });
    } catch (error) {
        console.log(error);
    } finally {
        // 标记数据加载完成
        noteInfoLoaded.value = true;
        floatListLoaded.value = true;
    }
}

// 在组件挂载后执行获取数据
onMounted(() => {
    getNoteContent();
});

// 监视noteInfoLoaded，当数据加载完成时再渲染noteContent组件
watch(noteInfoLoaded, (loaded) => {
    if (loaded) {
        // 数据加载完成，可以渲染noteContent组件
    }
});

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
