//把main.ts里vant的按需引入抽离出来易于管理
import {createApp} from "vue";
import App from "../App.vue";

//引入标签栏
import {Tabbar, TabbarItem} from "vant";
//引入弹出层
import {Popup} from 'vant';

const app = createApp(App);
//引入轮播
import {Swipe, SwipeItem} from 'vant';
//引入下拉刷新
import {PullRefresh} from 'vant';
//引入图片懒加载
import {Lazyload} from 'vant';
//引入加载过度
import {Loading} from 'vant';
//创建标签栏实例
app.use(Tabbar);
app.use(TabbarItem);
//创建弹出层实例
app.use(Popup)
//创建轮播实例
app.use(Swipe)
app.use(SwipeItem)
//创建下拉刷新实例
app.use(PullRefresh)
//创建图片懒加载实例
app.use(Lazyload)
//创建加载过度实例
app.use(Loading)
