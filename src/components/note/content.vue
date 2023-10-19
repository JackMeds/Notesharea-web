<template>
    <div class="noteContainer">
        <div class="title">
            <div class="titleText">
                <h1>{{ noteInfo.title }}</h1>
            </div>
            <div class="titleBtn">
                <img src="/images/note/download.svg" alt="">
                <span>下载笔记</span>
            </div>
        </div>
        <div class="info">
            <div class="infoText">
                <p>作者：{{ noteInfo.user.nickName }}</p>
                <p>发布时间：{{ noteInfo.createdAt }}</p>
                <p>更新时间：{{ noteInfo.updatedAt }}</p>
                <p>浏览量：{{ noteInfo.viewCount }}</p>
                <p>标签：标签</p>
            </div>
        </div>
        <div class="author">
            <div class="authorInfo">
                <div class="authorPic">
                    <img :src="noteInfo.user.picture" alt="" />
                </div>
                <div class="authorRightContainer">
                    <div class="name">
                        <p>{{ noteInfo.user.nickName }}</p>
                    </div>
                    <div class="follower">
                        <p>粉丝：100</p>
                    </div>
                </div>
            </div>
            <div class="follow">
                <img src="/images/note/follow.svg" alt="">
                <span>关注</span>
            </div>
        </div>
        <div class="noteContent">
            <div class="contentPic">
                <n-carousel class="carousel" show-arrow draggable autoplay>
                    <img class="carousel-img" src="/images/note/content-1.jpg">
                    <img class="carousel-img" src="/images/note/content-2.jpg">
                    <img class="carousel-img" src="/images/note/content-3.jpg">
                </n-carousel>
            </div>
            <div class="contentText">
                <p>{{ noteInfo.content }}</p>
            </div>
        </div>
        <div class="comment">
            <div class="writeComment" v-if="props.LoginInfo.isLogin">
                <div class="userPic">
                    <img :src="noteInfo.user.picture" alt="">
                </div>
                <div class="commentInput">
                    <n-input class="commentInputArea" placeholder="发布一条友善的评论吧" type="textarea" maxlength="120" show-count
                        round autosize v-model:value="commentInputData" />
                </div>
                <div class="commentBtnContainer">
                    <div class="commentBtn" @click="publishComment()">
                        <p>发表评论</p>
                    </div>
                </div>
            </div>
            <div class="commentList">
                <div class="commentItem" v-for="(item, index) in commentList">
                    <!-- 评论 -->
                    <div class="commentMain">
                        <div class="commentItemLeft">
                            <div class="userPic">
                                <img :src="item.user.picture" alt="">
                            </div>
                        </div>
                        <div class="commentItemRight">
                            <div class="userName">
                                <p>{{ item.user.nickName }}</p>
                            </div>
                            <div class="commentTime">
                                <p>{{ item.createdAt }}</p>
                            </div>
                            <div class="commentText">
                                <p>{{ item.content }}</p>
                            </div>
                            <div class="function">
                                <div class="like">
                                    <img src="/images/like.svg" alt="">
                                    <span>点赞</span>
                                </div>
                                <div class="reply" @click="doReply(index)">
                                    <img src="/images/reply.svg" alt="">
                                    <span>回复</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="writeReply" v-if="item.showReplyInput">
                        <div class="replyInput">
                            <n-input class="replyInputArea" placeholder="发布一条友善的评论吧" type="textarea" maxlength="120"
                                show-count round autosize v-model:value="replyInputData" />
                        </div>
                        <div class="replyBtnContainer">
                            <div class="replyBtn" @click="publishReply(index)">
                                <p>回复</p>
                            </div>
                        </div>
                    </div>
                    <!-- 回复 -->
                    <div class="replyList">
                        <div class="replyItem" v-for="replyItem in item.replies">
                            <div class="replyItemLeft">
                                <div class="userPic">
                                    <img :src="replyItem.user.picture" alt="">
                                </div>
                            </div>
                            <div class="replyItemRight">
                                <div class="userName">
                                    <p>{{ replyItem.user.nickName }}</p>
                                </div>
                                <div class="replyTime">
                                    <p>{{ replyItem.createdAt }}</p>
                                </div>
                                <div class="replyText">
                                    <p>{{ replyItem.content }}</p>
                                </div>
                                <div class="function">
                                    <div class="like">
                                        <img src="/images/like.svg" alt="">
                                        <span>点赞</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, getCurrentInstance, defineProps, onMounted } from "vue";
import { useRouter } from "vue-router";

const proxy = getCurrentInstance().proxy;
const router = useRouter();

const props = defineProps({
    noteInfo: {
        type: Object
    },
    LoginInfo: {
        type: Object
    }
})
console.log(props.noteInfo);
const noteInfo = ref(props.noteInfo);

//查询评论
const commentList = ref([]);
const getComment = async () => {
    try {
        const res = await proxy.$http.get(`http://localhost:3000/api/comment_and_reply/list`, {
            params: {
                noteId: props.noteInfo.id
            }
        })
        console.log(res.data);
        // 遍历评论列表，为每个评论对象添加showReplyInput属性并初始化为false
        commentList.value = res.data.data.map(comment => {
            comment.showReplyInput = false;
            // // 在回复列表中也为每个回复对象添加showReplyInput属性并初始化为false
            // comment.replies.forEach(reply => {
            //     reply.showReplyInput = false;
            // });
            return comment;
        });
        console.log(commentList.value);
    } catch (error) {
        console.log(error);
    }
}

onMounted(() => {
    getComment();
})

//发布评论
const commentInputData = ref("");
const publishComment = async () => {
    try {
        const res = await proxy.$http.post(`http://localhost:3000/api/comment_and_reply/createComment`, {
            noteId: props.noteInfo.id,
            userId: props.LoginInfo.userInfo.id,
            content: commentInputData.value
        });
        console.log(res.data);
        commentInputData.value = "";
        getComment();
    } catch (error) {
        console.log(error);
    }
}

//打开回复输入框
const replyInputData = ref("");
const showReplyInput = ref(false);
const doReply = (index) => {
    // 遍历评论列表，将除了当前点击的评论外的其他评论的showReplyInput属性设置为false
    commentList.value.forEach((comment, i) => {
        if (i != index) {
            comment.showReplyInput = false;
        }
    });
    // 将当前点击的评论的showReplyInput属性设置为true
    commentList.value[index].showReplyInput = !commentList.value[index].showReplyInput;
}
//发布回复
const publishReply = async (index) => {
    try {
        if (replyInputData.value == "") {
            alert("回复内容不能为空");
            return;
        } else {
            const res = await proxy.$http.post(`http://localhost:3000/api/comment_and_reply/createReply`, {
                commentId: commentList.value[index].id,
                userId: props.LoginInfo.userInfo.id,
                content: replyInputData.value
            });
            console.log(res.data);
            replyInputData.value = "";
            getComment();
        }
    } catch (error) {
        console.log(error);
    }
}

</script>
<style>
.noteContainer {
    @apply w-full flex flex-col my-2;

    .title {
        @apply w-full flex justify-between;

        .titleText {
            @apply w-10/12;

            h1 {
                @apply text-3xl;
            }
        }

        .titleBtn {
            @apply h-7 flex border bg-white border-2 border-black rounded-2xl px-2 my-auto hover:cursor-pointer;

            img {
                @apply w-4 h-6 ml-2;
            }

            span {
                @apply leading-6 px-2;
            }
        }
    }

    .info {
        @apply w-full my-2;

        .infoText {
            @apply w-full flex;

            p {
                @apply text-xs text-gray-400 pr-10;
            }
        }
    }

    .author {
        @apply w-full flex mt-2 mb-8 pb-4 border-b border-black justify-between;

        .authorInfo {
            @apply w-10/12 flex;

            .authorPic {
                @apply w-16;

                img {
                    @apply object-cover h-16 w-16 rounded-full my-auto;
                }
            }

            .authorRightContainer {
                @apply w-5/6 ml-4 my-auto;

                .name {
                    @apply w-full font-bold;
                }

                .follower {
                    @apply w-full;
                }
            }
        }

        .follow {
            @apply my-auto h-7 flex bg-white border-2 border-black rounded-2xl px-5 hover:cursor-pointer;

            img {
                @apply w-4 h-6;
            }

            span {
                @apply w-full leading-6;
            }
        }
    }

    .noteContent {
        @apply w-full mx-auto px-4;

        .contentPic {
            @apply float-left mr-4;

            .carousel {
                @apply h-96 w-96 mx-auto;

                .carousel-img {
                    @apply object-cover h-96 w-96;
                }
            }
        }

        .contentText {
            @apply w-full;
        }
    }

    .comment {
        @apply w-full px-10 mt-10;

        .writeComment {
            @apply w-full h-32 flex flex-row;

            .userPic {
                @apply w-16 h-32 flex justify-center;

                img {
                    @apply object-cover h-16 w-16 rounded-full my-auto;
                }
            }

            .commentInput {
                @apply w-10/12 h-32 flex justify-center;

                .commentInputArea {
                    @apply h-24 mx-4 my-auto rounded-xl;
                }
            }

            .commentBtnContainer {
                @apply w-1/12 h-32 flex justify-center;

                .commentBtn {
                    @apply w-20 h-20 my-auto hover:cursor-pointer border border-black rounded-2xl flex justify-center items-center;
                }
            }
        }

        .commentList {
            @apply w-full;

            .commentItem {
                @apply w-full flex flex-col;

                .commentMain {
                    @apply w-full flex flex-row my-4;

                    .commentItemLeft {
                        @apply w-16 flex justify-center;

                        .userPic {
                            @apply w-16 h-16 flex justify-center;

                            img {
                                @apply object-cover h-16 w-16 rounded-full my-auto;
                            }
                        }
                    }

                    .commentItemRight {
                        @apply w-11/12 ml-4;

                        .userName {
                            @apply w-full text-sm font-bold;
                        }

                        .commentTime {
                            @apply w-full text-xs text-gray-400;
                        }

                        .commentText {
                            @apply w-full;
                        }

                        .function {
                            @apply w-full flex justify-start;

                            .like {
                                @apply w-1/12 flex justify-center items-center cursor-pointer;

                                img {
                                    @apply w-4 h-4 mr-1;
                                }
                            }

                            .reply {
                                @apply w-1/12 flex justify-center items-center cursor-pointer;

                                img {
                                    @apply w-4 h-4 mr-1;
                                }
                            }
                        }
                    }
                }

                /* 回复输入框 */
                .writeReply {
                    @apply w-5/6 h-16 flex flex-row justify-end items-center;

                    .replyInput {
                        @apply w-10/12 h-16 flex justify-center;

                        .replyInputArea {
                            @apply h-16 mx-4 my-auto rounded-xl;
                        }
                    }

                    .replyBtnContainer {
                        @apply w-1/12 h-16 flex justify-center;

                        .replyBtn {
                            @apply w-12 h-12 my-auto cursor-pointer border border-black rounded-xl flex justify-center items-center;
                        }
                    }
                }

                /* 回复 */
                .replyList {
                    @apply w-5/6 mx-auto;

                    .replyItem {
                        @apply w-full flex flex-row my-4;

                        .replyItemLeft {
                            @apply w-12 flex justify-center;

                            .userPic {
                                @apply w-12 h-12 flex justify-center;

                                img {
                                    @apply object-cover h-12 w-12 rounded-full my-auto;
                                }
                            }
                        }

                        .replyItemRight {
                            @apply w-11/12 ml-4;

                            .userName {
                                @apply w-full text-sm font-bold;
                            }

                            .replyTime {
                                @apply w-full text-xs text-gray-400;
                            }

                            .replyText {
                                @apply w-full;
                            }

                            .function {
                                @apply w-full flex justify-start;

                                .like {
                                    @apply w-1/12 flex justify-center items-center cursor-pointer;

                                    img {
                                        @apply w-4 h-4 mr-1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
