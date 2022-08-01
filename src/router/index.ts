import {createRouter, createMemoryHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("../pages/Find/index.vue"),
    },
    {
        path: '/jump',
        component: () => import("../pages/Find/components/Jump.vue")
    },
    {
        path: "/mine",
        component: () => import("../pages/Mine/index.vue"),
    },
    {
        path: "/comment",
        component: () => import("../pages/Find/components/Comment.vue")
    }
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
