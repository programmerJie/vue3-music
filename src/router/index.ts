import {createRouter, createMemoryHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        //发现
        path: "/",
        name: 'find',
        component: () => import("../pages/Find/index.vue"),
    },
    {
        //歌单
        path: '/songList',
        name: 'songList',
        component: () => import("../pages/Find/SongList/index.vue"),
    },
    {
        //评论
        path: "/comment",
        name: 'comment',
        component: () => import("../pages/Find/Comment/index.vue")
    },
    {
        //我的
        path: "/mine",
        component: () => import("../pages/Mine/index.vue"),
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
