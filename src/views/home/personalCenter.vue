<template>
    <div class="personalContainer">
        <headerNav class="headerNav" :class="{ 'shadow-lg': isScrolled }" />
        <div class="headerNull"></div>
        <div class="personalContent">

            <div class="personalLeft">
                <personalAside/>
            </div>
            <div class="personalRight">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import headerNav from "../../components/nav.vue";
import personalAside from '../../components/personal/personalAside.vue';
import personalContent from '../../components/personal/personalContent.vue';


const isScrolled = ref(false);

// 监听页面滚动事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// 在组件挂载时添加滚动事件监听
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.personalContainer {
    @apply h-screen;
    .headerNav {
        @apply w-full h-16 z-50 fixed top-0 left-0 right-0 ;
    }

    .headerNull {
        @apply w-full h-16;
    }

    .personalContent {
        @apply  flex w-2/3 mx-auto h-4/5; 
        .personalLeft {
            @apply basis-1/6 border-2 border-black rounded-md mr-4;
        }

        .personalRight {
            @apply basis-5/6 border-2 border-black rounded-md;
        }
    }


}
</style>