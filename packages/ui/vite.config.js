import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
  build: {
    sourcemap: false,
    target: "modules",
    rollupOptions: {
      // 排除一些打包依赖
      external: [
        "vue",
        "axios",
        "dayjs",
        "lodash-es",
        "ant-design-vue",
        "js-cookie",
        "echarts",
        "@ant-design/icons-vue",
      ],
    },
    minify: false, //禁用代码压缩
    lib: {
      entry: "./src/entry.js",
      name: "yishuo-ui",
      fileName: "yishuo-ui",
      formats: ["umd", "es", "cjs"],
    },
  },
});
