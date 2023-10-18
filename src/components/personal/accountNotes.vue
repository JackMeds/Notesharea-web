<template>
    <div class="noteListContainer">
        <div class="noteListTitle">
            <span>我的笔记</span>
        </div>
        <div class="noteList">
            <div class="noteListItem" v-for="item in noteList">
                <div class="noteListItemLeft">
                    <div class="noteListItemLeftImg" @click="toNote(item.noteId)">
                        <img :src="item.img" alt="" />
                    </div>
                </div>
                <div class="noteListItemContent">
                    <div class="noteListItemheader">
                        <div class="noteListItemContentTitle">
                            <span @click="toNote(item.id)">{{ item.title }}</span>
                        </div>
                        <div class="noteListItemContentText">
                            <span @click="toNote(item.id)">{{ item.content.slice(0, 70) }}{{ item.content.length > 70
                                ? '...' : '' }}</span>
                        </div>
                        <div class="noteListItemContentInfo">
                            <span class="username" @click="toNote(item.userId)">{{ item.user.nickName }}</span>
                            <span class="date">{{ item.date }}</span>
                        </div>
                    </div>
                    <div class="noteListItemFooter">
                        <div class="noteListItemFooterItem">
                            <div class="noteListItemFooterItemText">
                                <n-button @click="toEditNote(item.id)">修改</n-button>
                            </div>
                        </div>
                        <div class="noteListItemFooterItem">
                            <div class="noteListItemFooterItemText">
                                <!-- 弹出确认删除 -->
                                <n-popconfirm @positive-click="deleteNote(item.id)" positive-text="确认" negative-text="取消">
                                    <template #trigger>
                                        <n-button type="error">删除</n-button>
                                    </template>
                                    确认删除吗（可就找不回来了！！！）
                                </n-popconfirm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue';
import { useRouter } from "vue-router";
import { isLogin } from '../../js/isLogin.js'
const router = useRouter();

const { proxy } = getCurrentInstance();

const loginInfo = ref(isLogin());
if (!loginInfo.value.isLogin) {
    alert('请先登录');
    router.push('/auth/login');
}
console.log(isLogin());
console.log(loginInfo.value.userInfo.id)


const noteList = ref([]);

//获取用户笔记列表
const getNoteList = () => {
    proxy.$http
        .get("http://localhost:3000/api/note/getUserNoteList", {
            params: {
                userId: loginInfo.value.userInfo.id
            }
        })
        .then((response) => {
            console.log(response.data);
            noteList.value = response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

getNoteList();

//删除笔记
const deleteNote = (noteId) => {
    proxy.$http
        .post("http://localhost:3000/api/note/deleteUserNote", {
            noteId: noteId
        })
        .then((response) => {
            console.log(response.data);
            if (response.data.code == 0) {
                alert('删除成功');
                getNoteList();
            } else {
                alert('删除失败');
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

//跳转到笔记详情页
const toNote = (noteId) => {
    router.push({
        path: `/note/${noteId}`,
    });
}

//跳转到笔记编辑页
const toEditNote = (noteId) => {
    router.push({
        path: `/note/edit/${noteId}`,
    });
}

</script>

<style scoped>
.noteListContainer {
    @apply flex flex-col;

    .noteListTitle {
        @apply flex flex-row items-center justify-start ml-4;
        height: 50px;

        span {
            @apply text-2xl;
        }
    }

    .noteList {
        @apply w-full px-4;

        .noteListItem {
            @apply w-full flex mb-2 last:mb-0;

            .noteListItemLeft {
                @apply w-1/4;

                .noteListItemLeftImg {
                    @apply aspect-[4/3] w-full rounded-sm overflow-hidden cursor-pointer;

                    img {
                        @apply w-full h-full object-cover object-center;
                    }
                }
            }

            .noteListItemContent {
                @apply w-3/4 flex flex-col justify-between ml-2;

                .noteListItemheader {
                    .noteListItemContentTitle {
                        @apply mb-2;

                        span {
                            @apply text-2xl cursor-pointer;
                        }
                    }

                    .noteListItemContentText {
                        span {
                            @apply text-sm text-gray-500 cursor-pointer;
                        }
                    }

                    .noteListItemContentInfo {
                        .username {
                            @apply text-xs text-gray-400;
                        }

                        .date {
                            @apply text-xs text-gray-400;
                        }
                    }
                }

                .noteListItemFooter {
                    @apply w-full flex mb-3;

                    .noteListItemFooterItem {
                        @apply mr-3 mt-1;

                        .noteListItemFooterItemText {
                            @apply w-full flex justify-center items-center;

                            img {
                                @apply w-5 h-5 mr-1;
                            }

                            span {
                                @apply text-xs cursor-pointer;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>