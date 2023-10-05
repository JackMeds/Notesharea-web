<template>
    <div style="height: 6000px; position: relative">
        <n-layout position="absolute">
            <n-layout-header style="height: 64px; padding: 24px" bordered>
                <personalHeader/>
            </n-layout-header>
            <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
                <n-layout-sider bordered content-style="padding: 24px;">
                    <personalAside />
                </n-layout-sider>
                <n-layout content-style="padding: 24px;">
                    <personalContent />
                </n-layout>
            </n-layout>
        </n-layout>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import personalHeader from '../../components/personal/personalHeader.vue'; 
import personalAside from '../../components/personal/personalAside.vue';   
import personalContent from '../../components/personal/personalContent.vue'; 

</script>

<style></style>