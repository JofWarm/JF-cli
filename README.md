# JF-CLI 脚手架模板

欢迎使用 **JF-CLI**，这是一个基于 Vue 3 + Vite 搭建的前端脚手架模板，内置两个基础模块，帮助你快速启动前端项目开发：

- ✅ 登录/注册模块（Login & Register）
- ✅ Vue 3 + Vite 脚手架结构（组件自动引入、Router、Pinia、Element Plus）

---

## 📦 功能模块简介

### 1. 登录器（Login.vue）

一个整合了用户登录、注册和管理员登录功能的界面，支持基本的前端验证和 UI 交互。

- 用户登录  
- 用户注册  
- 管理员登录  
- 表单校验与提示  
- 使用 `Element Plus` 提供美观的 UI

**路径：**

```
src/
├── views/
│   └── Login.vue
├── assets/
│   └── login.jpg
```

---

### 2. Vue 3 CLI 模板结构

基于 `Vite` + `Vue 3` 搭建的模块化工程结构，内置常用依赖和开发配置：

- 🔧 Vite 快速构建  
- 🎨 Element Plus 组件库按需引入（自动）  
- 📂 Vue Router + Pinia 状态管理  
- 📁 组件目录结构清晰，适合扩展  
- 💡 支持 ESLint 和 Prettier 格式化  
- 🚀 项目已初始化 Git，可直接连接 GitHub/Gitee 推送  

---

## 🚀 快速开始

### 安装依赖

```
pnpm install
# 或
npm install
```

### 启动项目

```
pnpm dev
# 或
npm run dev
```

### 打包项目

```
pnpm build
# 或
npm run build
```

---

## 📁 目录结构

```
JF-cli/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 图片/样式资源
│   ├── components/        # 通用组件
│   ├── router/            # 路由配置
│   ├── store/             # 状态管理 (Pinia)
│   ├── views/             # 页面模块
│   │   └── Login.vue      # 登录器页面
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
└── vite.config.js         # Vite 配置
```

---

## 🧪 TODO 可拓展项

- ✅ 登录状态管理和持久化  
- ⏳ 接入后端 API  
- ⏳ 权限控制  
- ⏳ 动态路由注册  
- ⏳ 多语言支持  

---

## 🧠 技术栈

- [Vue 3](https://vuejs.org/)  
- [Vite](https://vitejs.dev/)  
- [Pinia](https://pinia.vuejs.org/)  
- [Vue Router](https://router.vuejs.org/)  
- [Element Plus](https://element-plus.org/)  

---

## 🐙 GitHub 项目地址

[https://github.com/JofWarm/JF-cli](https://github.com/JofWarm/JF-cli)

欢迎 star ⭐️ 和 fork 🍴！

---

## 📜 License

[MIT](LICENSE)
