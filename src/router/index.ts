import { createRouter, createMemoryHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    //发现
    path: "/",
    name: "find",
    component: () => import("../pages/Find/index.vue"),
  },
  {
    path: "/search",
    component: () => import("../pages/Find/Search/index.vue"),
  },
  {
    //歌单列表
    path: "/songList",
    name: "songList",
    component: () => import("../pages/Find/SongList/index.vue"),
  },
  {
    //歌单评论
    path: "/comment",
    name: "comment",
    component: () => import("../pages/Find/Comment/index.vue"),
  },
  {
    //mv
    path: "/mv",
    name: "mv",
    component: () => import("../pages/Find/Mv/index.vue"),
  },
  {
    //我的
    path: "/mine",
    name: "name",
    component: () => import("../pages/Mine/index.vue"),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
