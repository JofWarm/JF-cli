import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')   // 这里添加别名配置
    }
  },
  server: {
    host: 'localhost',
    open: true,  // 自动打开浏览器
    proxy: {
      // 代理所有以 /api 开头的请求
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 去掉路径中的 /api
      }
    }
  }
})
