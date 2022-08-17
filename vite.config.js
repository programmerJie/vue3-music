import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
//vw
import postcsspxtoviewport from "postcss-px-to-viewport";
//vant按需引入插件
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [VantResolver()]
        }),
    ],
    css: {
        postcss: {
            plugins: [
                postcsspxtoviewport({
                    unitToConvert: "px",
                    viewportWidth: 750,
                    unitPrecision: 3,
                    propList: ["*"],
                    viewportUnit: "vw",
                    fontViewportUnit: "vw",
                    selectorBlackList: [],
                    minPixelValue: 1,
                    mediaQuery: true,
                    replace: true,
                    // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
                    exclude: [],
                    landscape: false
                }),
            ]
        }
    }
});
