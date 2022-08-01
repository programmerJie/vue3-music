import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {createPinia} from "pinia";
import router from "./router";
//引入vant组件库
import "./vant/index.ts";
//引入字体文件
import '../src/assets/font/index.css'

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
