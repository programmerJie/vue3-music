import {createRouter, createMemoryHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: 'find',
        component: () => import("../pages/Find/index.vue"),
        meta: {
            title: '发现',
            keepAlive: true,
        }
    },
    {
        path: "/search",
        name: 'search',
        component: () => import("../pages/Find/Search/index.vue"),
        meta: {
            title: '搜索',
            keepAlive: false
        }
    },
    {
        path: "/songList",
        name: 'songlist',
        component: () => import("../pages/Find/SongList/index.vue"),
        meta: {
            title: '歌单列表',
            keepAlive: false
        }
    },
    {
        path: "/comment",
        name: 'comment',
        component: () => import("../pages/Find/Comment/index.vue"),
        meta: {
            title: '评论',
            keepAlive: false
        }
    },
    {
        path: "/mv",
        name: 'mv',
        component: () => import("../pages/Find/Mv/index.vue"),
        meta: {
            title: 'mv',
            keepAlive: false
        }
    },
    {
        path: "/blog",
        name: 'blog',
        component: () => import("../pages/Blog/index.vue"),
        meta: {
            title: '博客',
            keepAlive: false
        }
    },
    {
        path: "/mine",
        name: 'mine',
        component: () => import("../pages/Mine/index.vue"),
        meta: {
            title: '我的',
            keepAlive: false
        }
    },
    {
        path: '/follow',
        name: 'follow',
        component: () => import("../pages/Follow/index.vue"),
        meta: {
            title: '关注',
            keepAlive: false
        }
    },
    {
        path: '/yuncun',
        name: 'yuncun',
        component: () => import("../pages/YunCun/index.vue"),
        meta: {
            title: '云村',
            keepAlive: false,
        }
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
