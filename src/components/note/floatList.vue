<template>
    <div class="floatListConatiner">
        <div class="like">
            喜欢
        </div>
        <div class="comment">
            评论
        </div>
        <div class="collect">
            收藏
        </div>
        <div class="share">
            分享
        </div>
        <div class="report">
            举报
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
        @apply w-16 h-16 border border-black mb-2;
    }
    .comment {
        @apply w-16 h-16 border border-black mb-2;
    }
    .collect {
        @apply w-16 h-16 border border-black mb-2;
    }
    .share {
        @apply w-16 h-16 border border-black mb-2;
    }
    .report {
        @apply w-16 h-16 border border-black mb-2;
    }
}
</style>