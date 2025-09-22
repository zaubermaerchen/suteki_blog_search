import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from 'vite-plugin-vue-devtools';

export default ({ mode }: { mode: string }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  // https://vitejs.dev/config/
  return defineConfig({
    base: process.env.VITE_APP_BASE_PATH,
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "https://zaubermaerchen.info/suteki_blog/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
          cookieDomainRewrite: '',
        }
      }
    }
  })
}
