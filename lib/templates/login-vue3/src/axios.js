import axios from "axios"
import router from "@/router" // 请根据你的 router 文件路径调整
import { ElMessage } from "element-plus"

const request = axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': "application/json; charset=utf-8"
  }
})

// 请求拦截器：添加 token
request.interceptors.request.use(config => {
  config.headers['Authorization'] = localStorage.getItem("token")
  return config
})

// 响应拦截器
request.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === "0") {
      return response
    } else {
      ElMessage.error(res.msg || '系统异常')
      return Promise.reject(res.msg || 'Error')
    }
  },
  error => {
    if (error.response && error.response.data) {
      error.message = error.response.data.msg
    }

    if (error.response && error.response.status === 401) {
      router.push("/login")
    }

    ElMessage.error(error.message || '请求失败', { duration: 3000 })
    return Promise.reject(error)
  }
)

export default request
