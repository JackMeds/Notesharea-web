<template>
    <div class="floatListConatiner">
        <div class="like">
            <img src="/images/like.svg" alt="">
            <span>100</span>
        </div>
        <div class="comment">
            <img src="/images/comment.svg" alt="">
            <span>100</span>
        </div>
        <div class="collect">
            <img src="/images/collect.svg" alt="">
            <span>100</span>
        </div>
        <div class="share">
            <img src="/images/share.svg" alt="">
            <span>100</span>
        </div>
        <div class="report">
            <img src="/images/report.svg" alt="">
            <span>100</span>
        </div>
        <div class="top">
            <img src="/images/top.svg" alt="">
            <span>TOP</span>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>
.floatListConatiner {
    @apply flex flex-col;
    .like {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8 ;
        }
    }
    .comment {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8;
        }
    }
    .collect {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8;
        }
    }
    .share {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8;
        }
    }
    .report {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8;
        }
    }
    .top {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;
        img {
            @apply w-8 h-8;
        }
    }
}
</style>