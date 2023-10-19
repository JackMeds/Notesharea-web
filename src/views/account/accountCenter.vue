<template>
    <div class="personalContainer">
        <headerNav class="headerNav" :class="{ 'shadow-lg': isScrolled }" :LoginInfo="LoginInfo"/>
        <div class="headerNull"></div>
        <div class="personalContent">

            <div class="personalLeft">
                <accountAside/>
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
import accountAside from '../../components/personal/accountAside.vue';
import accountContent from '../../components/personal/accountContent.vue';
import { isLogin } from "../../js/isLogin"

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
</script>

<style scoped>
@import "../../style/headerNav.css";
.personalContainer {
    height: 50rem;

    .personalContent {
        @apply  flex w-2/3 mx-auto h-4/5; 
        .personalLeft {
            @apply basis-1/6 border-2 border-black rounded-md mr-4 overflow-y-auto;
        }

        .personalRight {
            @apply basis-5/6 border-2 border-black rounded-md overflow-y-auto;
        }
    }


}
</style>