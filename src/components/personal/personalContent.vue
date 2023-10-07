<template>
    <div class="contentContainer">
        <h1 class="personalCenter">个人资料</h1>
        <div class="container">
            <div class="contentList">
                <from class="contentTable">
                    <div class="contentItem">
                        <div class="itemLeft"><span>用户名</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的用户名" /></div>
                    </div>

                    <div class="contentItem">
                        <div class="itemLeft"><span>职位</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的职位" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>公司</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的公司" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>个人主页</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的个人主页" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>个人介绍</span></div>
                        <div class="itemRight"><n-input class="contentInput" type="textarea" maxlength="30" show-count
                                placeholder="填写您的个人介绍" />
                        </div>
                    </div>
                </from>
                <div class="contentItem">
                    <div class="itemLeft"></div>
                    <div class="uploadBtn" :disabled="!fileListLengthRef" @click="handleClick">
                        <span>
                            保存修改
                        </span>
                    </div>
                </div>

            </div>
            <div class="contentImage">
                <div class="myImage">
                    <div>
                        <n-avatar round :size="48" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    </div>
                    <div>
                        <h1>我的头像</h1>
                    </div>
                    <div>
                        <p>支持jpg、png、<br />jpeg
                            格式大小5M<br />以内的图片
                        </p>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contentContainer {

    .personalCenter {
        @apply text-xl ml-6 mt-4;
    }

    .container {
        @apply flex flex-row mt-14;
    }

    .contentList {
        @apply flex flex-col ml-8 basis-2/3;

        .contentItem {
            @apply flex flex-row my-2;

            .itemLeft {
                @apply flex flex-row w-28;
            }

            itemRight {
                @apply flex flex-row;
            }

            .contentInput {
                @apply w-96;
            }
        }
    }
    .uploadBtn {
        @apply mt-4 mb-2 border-2 border-solid border-black rounded-md w-1/6 h-8 flex justify-center items-center cursor-pointer hover:bg-gray-100;
    }

    .contentImage {
        @apply flex basis-1/3 justify-center w-2;

        .myImage {
            @apply flex flex-col items-center;
        }

        div {
            h1 {
                @apply text-sm;
            }

            p {
                @apply text-xs text-zinc-400;
            }
        }


    }
}</style>