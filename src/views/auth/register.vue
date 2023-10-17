<template>
  <authNav class="authNav" />
  <!-- 中央输入框 -->
  <div class="centerInput">
    <n-form ref="formRef" :model="model" :rules="rules">
      <div class="title">
        <h1>注册</h1>
      </div>
      <div class="inputGroup">
        <div class="username">
          <n-form-item path="userName" label="用户名">
            <n-input v-model:value="model.userName" @keydown.enter.prevent />
          </n-form-item>
          <!-- <label class="inputTitle">
            <p>用户名</p>
          </label>
          <n-input type="text" v-model:value="userName" placeholder="请输入用户名" clearable /> -->
        </div>
        <div class="fristPassword">
          <n-form-item path="password" label="密码">
            <n-input v-model:value="model.password" type="password" @input="handlePasswordInput" @keydown.enter.prevent />
          </n-form-item>
          <!-- <div class="inputTitle">
            <p>密码</p>
          </div>
          <n-input type="password" v-model:value="password" show-password-on="mousedown" placeholder="请输入密码" clearable /> -->
        </div>
        <div class="secPassword">
          <n-form-item ref="rPasswordFormItemRef" first path="reenteredPassword" label="重复密码">
            <n-input v-model:value="model.reenteredPassword" :disabled="!model.password" type="password"
              @keydown.enter.prevent />
          </n-form-item>
          <!-- <div class="inputTitle">
            <p>确认密码</p>
          </div>
          <n-input type="password" show-password-on="mousedown" placeholder="请输入密码" clearable /> -->
        </div>
        <div class="email">
          <n-form-item path="email" label="邮箱">
            <n-input v-model:value="model.email" @keydown.enter.prevent />
          </n-form-item>
          <!-- <div class="inputTitle">
            <p>邮箱</p>
          </div>
          <n-input type="text" v-model:value="email" placeholder="请输入邮箱" clearable /> -->
        </div>
        <!-- 邮箱验证码 -->
        <!-- <div class="emailCode">
          <div class="inputTitle">
            <p>邮箱验证码</p>
          </div>
          <n-input-group>
            <n-input type="text" placeholder="请输入邮箱验证码" clearable />
            <n-button type="primary" ghost> 发送验证码 </n-button>
          </n-input-group>
        </div> -->
        <div class="registerEula">
          <n-checkbox class="checkbox" v-model:checked="eulaCheck" />
          <span>已阅读并同意</span><span class="eula">Notesharea用户协议</span><span>和</span><span
            class="eula">Notesharea隐私政策</span>
        </div>
      </div>
      <div class="buttonGroup">
        <n-button strong ghost type="primary" @click="toLogin">已有账户，去登录</n-button>
        <n-button type="primary" :disabled="eulaCheck === false" @click="register">注册</n-button>
      </div>


    </n-form>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from "vue"; //导入ref函数
import { useRouter } from "vue-router"; // 引入useRouter
import authNav from "../../components/auth/authNav.vue";
// import CryptoJS from "crypto-js"; // 导入CryptoJS


const { proxy } = getCurrentInstance();
const router = useRouter();
const userName = ref("");
const password = ref("");
const email = ref("");
const plaintext = ref(""); // 输入要加密的文本

let eulaCheck = ref(false);

const toLogin = () => {
  router.push("/auth/login");
};

//表单验证
const formRef = ref(null);
const rPasswordFormItemRef = ref(null);
const model = ref({
  userName: null,
  password: null,
  reenteredPassword: null,
  email: null,
});
function validatePasswordStartWith(rule, value) {
  return !!model.value.password && model.value.password.startsWith(value) && model.value.password.length >= value.length;
}

function validatePasswordSame(rule, value) {
  return value === model.value.password;
}

const rules = {
  userName: [
    {
      required: true,
      message: "需要用户名",
      trigger: ["input", "blur"]
    },
    {
      min: 2, // 最小长度为4
      message: "用户名至少需要2个字符",
      trigger: "blur"
    },
    {
      max: 20, // 最大长度为20
      message: "用户名不能超过20个字符",
      trigger: "blur"
    },
    {
      pattern: /^[a-zA-Z0-9_-]+$/, // 只允许包含字母、数字、下划线和破折号
      message: "用户名只能包含字母、数字、下划线和破折号",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: ["blur"]
    },
    {
      min: 6, // 最小长度为6
      message: "密码至少需要6个字符",
      trigger: "blur"
    },
    {
      max: 20, // 最大长度为20
      message: "密码不能超过20个字符",
      trigger: "blur"
    },
    {
      pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]+$/, // 必须包含字母和数字
      message: "密码必须包含至少一个字母和一个数字",
      trigger: "blur"
    }
  ],
  reenteredPassword: [
    {
      required: true,
      message: "请再次输入密码",
      trigger: ["input", "blur"]
    },
    {
      validator: validatePasswordStartWith,
      message: "两次密码输入不一致",
      trigger: "input"
    },
    {
      validator: validatePasswordSame,
      message: "两次密码输入不一致",
      trigger: ["blur", "password-input"]
    }
  ],
  email: [
    {
      required: true,
      message: "需要邮箱",
      trigger: ["input", "blur"]
    },
    {
      type: 'email', // 邮箱格式验证
      message: "邮箱格式不正确",
      trigger: "blur"
    }
  ],
};

function handlePasswordInput() {
  if (model.value.reenteredPassword) {
    rPasswordFormItemRef.value?.validate({ trigger: "password-input" });
  }
}

// const register = () => {
//   let passwordToSHA256 = password.value;
//   passwordToSHA256 = CryptoJS.SHA256(password.value).toString(); // 对输入的密码进行加密
//   //构造要发送的数据
//   const data = {
//     userName: model.value.userName,
//     password: model.value.password,
//     email: model.value.email,
//   };
//   console.log(data);
//   //发送请求
//   proxy.$http
//     .post("http://localhost:3000/api/user/register", data)
//     .then((response) => {
//       console.log(response.data);
//       // 请求成功后清空输入框的值
//       userName.value = "";
//       password.value = ""; // 清空密码输入框
//       email.value = "";
//     })
//     .catch((error) => {
//       console.log(error);
//       // 请求成功后清空输入框的值
//       userName.value = "";
//       password.value = ""; // 清空密码输入框
//       email.value = "";
//     });
// };

function register() {
  if (eulaCheck) {
    formRef.value?.validate((errors) => {
      if (!errors) {
        console.log(model.value);
        proxy.$http
          .post("http://localhost:3000/api/user/register", model.value)
          .then((response) => {
            console.log(response.data);
            // 请求成功后清空输入框的值
            userName.value = "";
            password.value = ""; // 清空密码输入框
            email.value = "";
          })
          .catch((error) => {
            console.log(error);
            // 请求成功后清空输入框的值
            userName.value = "";
            password.value = ""; // 清空密码输入框
            email.value = "";
          });
        alert('注册成功');
        router.push("/auth/login");
      } else {
        alert('注册失败');
      }
    });
  } else {
    return;
  }

}
</script>
<style scoped>
.centerInput {
  @apply container mx-auto w-1/3 mt-40;

  .title {
    @apply text-2xl border-b border-black px-5;
  }

  .inputGroup {
    @apply mt-5;

    .inputTitle {
      @apply block;

      p {
        @apply text-xs px-2 my-1;
      }
    }

    .registerEula {
      @apply mx-auto mt-2 pl-2 flex justify-start items-center;

      .checkbox {
        @apply mr-2
      }

      span {
        @apply text-xs;
      }

      .eula {
        @apply text-blue-500;
      }
    }

  }

  .buttonGroup {
    @apply mt-5 float-right;

    .n-button {
      @apply ml-2;
    }
  }
}
</style>
