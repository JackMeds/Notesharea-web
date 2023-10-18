<template>
    <div class="floatListConatiner">
        <div class="like">
            <img src="/images/like.svg" alt="" v-if="isLike" @click="unlike">
            <img src="/images/unlike.svg" alt="" v-else @click="like">
            <span>{{ likeCount }}</span>
        </div>
        <div class="comment">
            <img src="/images/comment.svg" alt="">
            <span>{{ commentCount }}</span>
        </div>
        <div class="collect">
            <img src="/images/collect.svg" alt="">
            <span>100</span>
        </div>
        <div class="share">
            <img src="/images/share.svg" alt="">
            <span>分享</span>
        </div>
        <div class="report">
            <img src="/images/report.svg" alt="">
            <span>举报</span>
        </div>
        <div class="top">
            <img src="/images/top.svg" alt="">
            <span>TOP</span>
        </div>
    </div>
</template>
<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'

const { proxy } = getCurrentInstance()

const props = defineProps({
    noteInfo: {
        type: Object
    },
    LoginInfo: {
        type: Object
    }
})

//点赞功能
const isLike = ref(false)
const likeCount = ref(0)
//获取点赞状态
const getLikeStatus = () => {
    console.log(props.noteInfo.id)
    proxy.$http
        .get("/api/note/getLikeStatus", {
            params: {
                userId: props.LoginInfo.userInfo.id,
                noteId: props.noteInfo.id
            }
        })
        .then(res => {
            isLike.value = res.data.data.isLike;
            likeCount.value = res.data.data.likeCount;
            console.log(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
}
getLikeStatus()
const like = () => {
    proxy.$http
        .post("/api/note/like", {
            userId: props.LoginInfo.userInfo.id,
            noteId: props.noteInfo.id,
            isLike: isLike.value
        })
        .then(res => {
            isLike.value = true;
            console.log(res)
            likeCount.value = res.data.data.likeCount;
        })
        .catch(err => {
            console.log(err)
        })
}
const unlike = () => {
    proxy.$http
        .post("/api/note/unlike", {
            userId: props.LoginInfo.userInfo.id,
            noteId: props.noteInfo.id,
            isLike: isLike.value
        })
        .then(res => {
            isLike.value = false;
            console.log(res.data.data.likeCount)
            likeCount.value = res.data.data.likeCount;
        })
        .catch(err => {
            console.log(err)
        })
}

//获取评论计数
const commentCount = ref(0);
const getCommentCount = () => {
    proxy.$http
        .get("/api/note/getCommentCount", {
            params: {
                noteId: props.noteInfo.id
            }
        })
        .then(res => {
            console.log("getComment",res.data.data)
            commentCount.value = res.data.data;
        })
        .catch(err => {
            console.log(err)
        })
}
getCommentCount()

</script>
<style>
.floatListConatiner {
    @apply flex flex-col;

    .like {
        @apply w-16 h-16 mb-2 flex flex-col justify-center items-center;

        img {
            @apply w-8 h-8;
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