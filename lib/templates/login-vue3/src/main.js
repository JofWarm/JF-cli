import { createApp } from 'vue'
import App from './App.vue'

// 1. 引入 Element Plus 和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 2. （可选）引入中文语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 3. 注册所有图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 4. 使用 Element Plus 插件
app.use(ElementPlus, {
  locale: zhCn,
})

app.mount('#app')
