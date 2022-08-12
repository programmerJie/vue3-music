import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {createPinia} from "pinia";
import router from "./router";
//引入vant组件库
import '../src/vant/index';
//引入字体文件
import '../src/assets/font/index.css';
//由于抽离懒加载会导致报错,所以没有放到vant文件夹里面
import { Lazyload } from 'vant';
const pinia = createPinia();
const app = createApp(App);
//创建懒加载实例
app.use(Lazyload);
//创建pinia实例
app.use(pinia);
//创建router实例
app.use(router);
//创建app实例
app.mount("#app");