<template>
    <createNav class="createNav" :class="{ 'shadow-lg': isScrolled }" :LoginInfo="LoginInfo"></createNav>
    <div class="headerNull"></div>
    <div class="createContainer">
        <div class="createTitle">
            <p>
                笔记标题*
            </p>
            <n-input class="titleInput" maxlength="30" show-count clearable v-model:value="noteTitle" />
            <p>
                编辑笔记内容*
            </p>
        </div>
        <div class="wangEditor-container">
            <div class="editor">
                <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                    :mode="mode" />
                <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                    :mode="mode" @onCreated="handleCreated" />
            </div>
        </div>
        <n-upload ref="uploadRef" multiple directory-dnd action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
            :default-upload="false" @change="handleChange">
            <n-upload-dragger class="uploadDragger">
                <div class="">
                    <img src="/images/create/upload.svg" alt="">
                </div>
                <span style="font-size: 16px">
                    点击或者拖动文件到该区域来上传
                </span>
                <p>
                    请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
                </p>
            </n-upload-dragger>
        </n-upload>
        <div class="uploadBtn" :disabled="!fileListLengthRef" @click="createNote()">
            <span>
                发布笔记
            </span>
        </div>
        <div class="createEula">
            <span>发布笔记，即代表您同意</span><span class="elua">Notesharea使用协议</span><span>，请勿上传色情违法内容。</span>
        </div>
    </div>
</template>
<script setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, getCurrentInstance } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
import createNav from "../../components/create/createNav.vue";
import { useRouter } from "vue-router"; // 引入useRouter

import { isLogin } from "../../js/isLogin"

// 使用 isLogin 函数进行登录状态检查,返回一个对象
const LoginInfo = ref(isLogin());

const router = useRouter();

const { proxy } = getCurrentInstance();
const isScrolled = ref(false);

// 监听页面滚动事件
const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

// 在组件挂载时添加滚动事件监听
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
const mode = 'default' // 编辑器模式，可选值为：default、simple、classic



// 内容 HTML
const valueHtml = ref('')

// // 模拟 ajax 异步获取内容
// onMounted(() => {
//     setTimeout(() => {
//         valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
//     }, 1500)
// })

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入笔记内容...' }

//工具栏配置
toolbarConfig.toolbarKeys = [
    "headerSelect",
    "blockquote",
    "|",
    "bold",
    "underline",
    "italic",
    {
        "key": "group-more-style",
        "title": "更多",
        "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path><path d=\"M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path><path d=\"M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z\"></path></svg>",
        "menuKeys": [
            "through",
            "code",
            "sup",
            "sub",
            "clearStyle"
        ]
    },
    "color",
    "bgColor",
    "|",
    "fontSize",
    "fontFamily",
    "lineHeight",
    "|",
    "bulletedList",
    "numberedList",
    "todo",
    {
        "key": "group-justify",
        "title": "对齐",
        "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z\"></path></svg>",
        "menuKeys": [
            "justifyLeft",
            "justifyRight",
            "justifyCenter",
            "justifyJustify"
        ]
    },
    {
        "key": "group-indent",
        "title": "缩进",
        "iconSvg": "<svg viewBox=\"0 0 1024 1024\"><path d=\"M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z\"></path></svg>",
        "menuKeys": [
            "indent",
            "delIndent"
        ]
    },
    "|",
    "emotion",
    "insertLink",
    "insertTable",
    "codeBlock",
    "divider",
    "|",
    "undo",
    "redo"
]

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
    // setTimeout(() => {
    //     const toolbar = DomEditor.getToolbar(editor)

    //     const curToolbarConfig = toolbar.getConfig()
    //     console.log(curToolbarConfig.toolbarKeys) // 当前菜单排序和分组
    // }, 1000)
}

// 发布笔记
const noteTitle = ref(null);
// 发布笔记,上传文件
const fileListLengthRef = ref(0);
const uploadRef = ref(null);
const handleChange = (options) => {
    fileListLengthRef.value = options.fileList.length;
};
const createNote = () => {
    const editor = editorRef.value // 获取 editor ，必须等待它渲染完之后

    uploadRef.value?.submit();

    //获取笔记标题
    console.log(noteTitle.value);
    //获取笔记内容
    if (editor == null) return
    const noteContent = editorRef.value.getText()
    console.log(noteContent);

    //上传笔记
    let data = { "noteTitle": noteTitle.value, "noteContent": noteContent, "userId": null };
    if (LoginInfo.value.isLogin) {
        data.userId = LoginInfo.value.userInfo.id;
        if (noteTitle.value == null || noteContent == null) {
            alert("笔记标题和内容不能为空");
        } else {
            proxy.$http
                .post("http://localhost:3000/api/note/create", data)
                .then((response) => {
                    console.log(response.data);
                    if (response.data.code == 0) {
                        //发布笔记成功
                        alert("发布笔记成功");
                        //跳转到首页
                        router.push("/");
                    }
                    else {
                        //发布笔记失败
                        alert("发布笔记失败");
                    }
                });
        }
    } else {
        alert("请先登录");
    }
};

</script>
<style>
.createNav {
    @apply w-full h-14 z-50 fixed top-0 left-0 right-0 min-w-max;
}

.headerNull {
    @apply w-full h-14;
}

.createContainer {
    @apply container mx-auto flex-col flex;

    .createTitle {
        @apply w-full flex-col justify-start items-center;

        p {
            @apply text-xl font-bold mb-2;
        }

        .titleInput {
            @apply lg:w-1/2 w-full mb-2 rounded-md;
        }
    }

    .wangEditor-container {
        @apply border border-solid border-black rounded-md w-full mb-4 p-1;

        .editor {
            @apply w-full mb-4;
        }
    }

    .uploadDragger {
        @apply w-full h-60 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-md;

        img {
            @apply w-10;
        }

        span {
            @apply mt-4;
        }

        p {
            @apply mt-4 text-slate-400;
        }
    }

    .uploadBtn {
        @apply ml-auto mt-2 mb-2 border-2 border-solid border-black rounded-lg w-1/6 h-12 flex justify-center items-center cursor-pointer hover:bg-gray-100;
    }

    .createEula {
        @apply w-full flex justify-center items-center text-slate-400 mb-10;

        .elua {
            @apply text-blue-500;
        }
    }
}
</style>