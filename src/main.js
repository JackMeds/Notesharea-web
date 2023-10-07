import { createApp } from 'vue'
import './style.css'
import './style/preflight.css'
import App from './App.vue'
import router from "./router/index"
import './tailwind.css'
import naive from 'naive-ui'
import axios from 'axios'


const app = createApp(App);
app.config.globalProperties.$http = axios
app.use(naive);
app.use(router);
app.mount('#app');
