<template>
    <el-row class="row-bg" justify="center">
      <el-col :xl="6" :lg="7">
        <h2>𝕻𝖑𝖊𝖆𝖘𝖊 𝕷𝖔𝖌𝖎𝖓</h2>
        <el-image :src="loginImage" style="height: 180px; width: 180px" />
      </el-col>
  
      <el-col :span="1">
        <el-divider direction="vertical"></el-divider>
      </el-col>
  
      <el-col :xl="6" :lg="7">
        <el-tabs v-model="activeTab">
          <!-- 用户登录 -->
          <el-tab-pane label="用户登录" name="login">
            <el-form :model="loginForm" :rules="loginRules" ref="loginFormRef" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password" />
              </el-form-item>
              <el-form-item>
                <el-checkbox v-model="rememberPassword">记住密码</el-checkbox>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleLogin">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
  
          <!-- 注册 -->
          <el-tab-pane label="注册" name="register">
            <el-form :model="registerForm" :rules="registerRules" ref="registerFormRef" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="registerForm.password" type="password" />
              </el-form-item>
              <el-form-item label="确认密码" prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" type="password" />
              </el-form-item>
              <el-form-item label="电话" prop="phone">
                <el-input v-model="registerForm.phone" />
              </el-form-item>
              <el-form-item label="地址" prop="address">
                <el-input v-model="registerForm.address" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleRegister">注册</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
  
          <!-- 管理员登录 -->
          <el-tab-pane label="管理员登录" name="adminLogin">
            <el-form :model="adminLoginForm" :rules="loginRules" ref="adminLoginFormRef" label-width="100px">
              <el-form-item label="用户名" prop="username">
                <el-input v-model="adminLoginForm.username" />
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="adminLoginForm.password" type="password" />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleAdminLogin">登录</el-button>
                <el-button @click="resetForm('adminLoginForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios'
  import { ElMessage } from 'element-plus'
  import loginImage from '@/assets/login.jpg'
  
  const router = useRouter()
  
  const activeTab = ref('login')
  const rememberPassword = ref(false)
  
  const loginForm = reactive({ username: '', password: '' })
  const adminLoginForm = reactive({ username: '', password: '' })
  const registerForm = reactive({ username: '', password: '', confirmPassword: '', phone: '', address: '' })
  
  const loginFormRef = ref()
  const registerFormRef = ref()
  const adminLoginFormRef = ref()
  
  const loginRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }
  
  const registerRules = {
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    confirmPassword: [
      { required: true, message: '请确认密码', trigger: 'blur' },
      { validator: (rule, value, callback) => {
          if (value !== registerForm.password) {
            callback(new Error('两次密码不一致'))
          } else {
            callback()
          }
        }, trigger: 'blur' }
    ],
    phone: [
      { required: true, message: '请输入电话号码', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号码', trigger: 'blur' }
    ],
    address: [{ required: true, message: '请输入地址', trigger: 'blur' }]
  }
  
/*   const handleLogin = async () => {
    try {
      const res = await axios.post('URL地址', loginForm, {
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.data.code === '0') {
        ElMessage.success(res.data.msg || '登录成功')
        router.push({ path: '/index', query: { username: loginForm.username } })
      } else {
        ElMessage.error(res.data.msg || '登录失败')
      }
    } catch (err) {
      ElMessage.error('登录请求失败')
      console.error(err)
    }
  } */
  
  /* const handleAdminLogin = async () => {
    try {
      const res = await axios.post('URL地址', adminLoginForm)
      if (res.data.code === '0' && res.data.data.role === 'admin') {
        ElMessage.success('管理员登录成功')
        router.push({ path: '/admin', query: { username: adminLoginForm.username } })
      } else {
        ElMessage.error('管理员登录失败')
      }
    } catch (err) {
      ElMessage.error('管理员登录失败')
      console.error(err)
    }
  } */
  
  /* const handleRegister = async () => {
    try {
      const res = await axios.post('URL地址', registerForm)
      if (res.data.code === '0') {
        ElMessage.success('注册成功！')
      } else {
        ElMessage.error(res.data.msg || '注册失败')
      }
    } catch (err) {
      ElMessage.error(err?.response?.data?.message || '请求失败')
    }
  } */
  
  /* const resetForm = (formName) => {
    if (formName === 'loginForm') loginFormRef.value.resetFields()
    if (formName === 'registerForm') registerFormRef.value.resetFields()
    if (formName === 'adminLoginForm') adminLoginFormRef.value.resetFields()
  } */
  </script>
  
  <style scoped>
  .el-row {
    position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;

  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  padding: 20px;
  box-sizing: border-box;
  }
  .el-divider {
    height: 200px;
  }
  </style>
  