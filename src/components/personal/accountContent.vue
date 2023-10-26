<template>
    <div class="contentContainer">
        <h1 class="personalCenter">个人资料</h1>
        <div class="container">
            <div class="contentList">
                <n-form ref="formRef" :model="model">
                    <div class="contentItem">
                        <div class="itemLeft"><span>昵称</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的昵称" v-model:value="model.nickName" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>性别</span></div>
                        <div class="itemRight">
                            <!-- <n-input class="contentInput" maxlength="30" show-count clearable placeholder="填写您的性别"
                                v-model:value="model.gender" /> -->
                            <n-select class="contentInput" maxlength="30" v-model:value="model.gender" :options="options" />
                        </div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>邮箱</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的邮箱" v-model:value="model.email" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>手机号</span></div>
                        <div class="itemRight"><n-input class="contentInput" maxlength="30" show-count clearable
                                placeholder="填写您的手机号" v-model:value="model.phoneNum" /></div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"><span>个人简介</span></div>
                        <div class="itemRight"><n-input class="contentInput" type="textarea" maxlength="30" show-count
                                placeholder="填写您的个人简介" v-model:value="model.userIntro" />
                        </div>
                    </div>
                    <div class="contentItem">
                        <div class="itemLeft"></div>
                        <div class="uploadBtn" @click="uploadUserInfo">
                            <span>
                                保存修改
                            </span>
                        </div>
                    </div>
                </n-form>


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
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { isLogin } from '../../js/isLogin.js'
import Cookies from "js-cookie";
const router = useRouter();
const loginInfo = ref(isLogin());
if (!loginInfo.value.isLogin) {
    alert('请先登录');
    router.push('/auth/login');
}
console.log(isLogin());
console.log(loginInfo.value)

//表单里的数据
const userId = loginInfo.value.userInfo.id;
console.log(userId);
const { proxy } = getCurrentInstance();
const model = ref({
    nickName: '',
    gender: '',
    email: '',
    phoneNum: '',
    userIntro: '',
});

const options = [
    {
        label: "男",
        value: "1",
    },
    {
        label: "女",
        value: "2"
    },
    {
        label: "保密",
        value: "3"
    },
]


// 在页面加载时调用 getInfo 函数获取用户信息
onMounted(() => {
    getInfo();
});

//获取用户信息
const getInfo = () => {
    proxy.$http
        .get("http://localhost:3000/api/user/getPersonal", { params: { userId: userId } })
        .then((response) => {
            // 如果需要，处理成功响应
            const userInfo = response.data; // Assuming userInfo is an object
            console.log('User Info:', userInfo);
            console.log('User Info:', userInfo.nickName);

            model.value.nickName = userInfo.nickName;
            model.value.gender = userInfo.gender;
            model.value.email = userInfo.email;
            model.value.phoneNum = userInfo.phoneNum;
            model.value.userIntro = userInfo.userIntro;
            console.log('nick' + model.value.nickName);
        })
        .catch((error) => {
            // 如果需要，处理错误
            console.error('获取用户信息时出错：', error);
        });
};

//更新数据
const uploadUserInfo = () => {
    const updatedInfo = {
        userId: userId,
        nickName: model.value.nickName,
        gender: model.value.gender,
        email: model.value.email,
        phoneNum: model.value.phoneNum,
        userIntro: model.value.userIntro
    };
    console.log('model', model.value.email);
    console.log('updatedInfo', updatedInfo);
    proxy.$http
        .patch("http://localhost:3000/api/user/changeInfo", updatedInfo, {
            withCredentials: true,
        })
        .then((response) => {
            //设置用户信息的cookie
            console.log('更新用户信息时返回的数据：', response.data.data);
            Cookies.set("userInfo", JSON.stringify(response.data.data), { expires: 3});
            // 处理成功响应
            alert("用户信息已成功更新!");
            //页面刷新
            window.location.reload();
        })
        .catch((error) => {
            // 处理错误
            console.error('更新用户信息时出错：', error);
        });
};
// import axios from 'axios';
// const handleClick = async () => {
//     try {
//         const response = await axios.get('/api/user/changeInfo');
//         console.log('从后端获取到的数据：', response.data);
//         // 在这里处理后端返回的数据，更新页面等操作
//     } catch (error) {
//         console.error('获取后端数据时出错：', error);
//     }
// };

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
}
</style>