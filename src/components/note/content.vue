<template>
    <div class="noteContainer">
        <div class="title">
            <div class="titleText">
                <h1>{{noteInfo.title}}</h1>
            </div>
            <div class="titleBtn">
                <img src="/images/note/download.svg" alt="">
                <span>下载笔记</span>
            </div>
        </div>
        <div class="info">
            <div class="infoText">
                <p>作者：{{noteInfo.user.nickName}}</p>
                <p>发布时间：{{ noteInfo.createdAt }}</p>
                <p>更新时间：{{ noteInfo.updatedAt }}</p>
                <p>浏览量：{{noteInfo.viewCount}}</p>
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
                        <p>{{noteInfo.user.nickName}}</p>
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
                <p>{{noteInfo.content}}</p>
            </div>
        </div>
        <div class="comment">
            <div class="writeComment">
                <div class="userPic">
                    <img src="/images/login.jpg" alt="">
                </div>
                <div class="commentInput">
                    <n-input class="commentInputArea" placeholder="发布一条友善的评论吧" type="textarea" maxlength="120" show-count
                        round autosize />
                </div>
                <div class="commentBtnContainer">
                    <div class="commentBtn">
                        <p>发表评论</p>
                    </div>
                </div>
            </div>
            <div class="commentList">
                <div class="commentItem">
                    <div class="commentItemLeft">
                        <div class="userPic">
                            <img src="/images/login.jpg" alt="">
                        </div>
                    </div>
                    <div class="commentItemRight">
                        <div class="userName">
                            <p>贺大爷</p>
                        </div>
                        <div class="commentTime">
                            <p>2021-01-01 18:54</p>
                        </div>
                        <div class="commentText">
                            <p>评论内容</p>
                        </div>
                        <div class="function">
                            <div class="like">
                                <p>点赞</p>
                            </div>
                            <div class="reply">
                                <p>回复</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, getCurrentInstance, defineProps } from "vue";
import { useRouter } from "vue-router";

const { proxy } = getCurrentInstance();

const props = defineProps({
    noteInfo: {
        type: Object
    }
})
//noteInfo:
// {
//     "id": 1,
//     "userId": 3,
//     "title": "高等数学笔记",
//     "content": "定积分",
//     "img": "default",
//     "downloadLink": "default",
//     "likeCount": 0,
//     "collectCount": 0,
//     "commentCount": 0,
//     "viewCount": 0,
//     "createdAt": "2023-10-09T08:49:00.000Z",
//     "updatedAt": "2023-10-09T08:49:00.000Z",
//     "user": {
//         "userName": "lisi",
//         "nickName": "lisi",
//         "picture": null
//     },
//     "collects": [],
//     "comments": [],
//     "likes": []
// }
const noteInfo = ref(props.noteInfo);
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
                            @apply w-1/12 flex justify-center;
                        }

                        .reply {
                            @apply w-1/12 flex justify-center;
                        }
                    }
                }
            }
        }
    }
}</style>
