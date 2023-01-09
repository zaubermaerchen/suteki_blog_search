import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  // https://vitejs.dev/config/
  return defineConfig({
    base: process.env.VITE_APP_BASE_PATH,
    plugins: [
      vue(),
      tsconfigPaths(),
    ],
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
