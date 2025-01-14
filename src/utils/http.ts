/* eslint-disable no-param-reassign */
import { useAppStore } from '@/store'
import { UserInfo } from '@/typings'

type Data<T> = {
  code: number
  msg: string
  result: T
}
type methodType = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT'

interface option {
  method: methodType
  timeout: number
}

const defaultOption: option = {
  method: 'POST',
  timeout: 60 * 1000 * 5 // 5分钟
}

// 请求基地址
const baseURL = import.meta.env.VITE_SERVER_BASEURL

// 拦截器配置
const httpInterceptor = {
  // 拦截前触发
  invoke(options: UniApp.RequestOptions) {
    // 1. 非 http 开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    options.method = options.method || defaultOption.method
    options.timeout = options.timeout || defaultOption.timeout
    // 3. 添加小程序端请求头标识
    options.header = {
      platform: 'mp-weixin', // 可选值与 uniapp 定义的平台一致，告诉后台来源
      ...options.header
    }
    // 4. 添加 token 请求头标识
    const appStore = useAppStore()
    const { token } = appStore
    if (token) {
      options.header.Authorization = `Bearer ${token}`
    }
  }
}

// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)

export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 状态码 2xx，参考 axios 的设计
        if (res.statusCode >= 200 && res.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误  -> 清理用户信息，跳转到登录页
          // userStore.clearUserInfo()
          // uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          // 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误'
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试'
        })
        reject(err)
      }
    })
  })
}

export default http
