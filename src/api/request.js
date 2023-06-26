import axios from 'axios'
// import { ElMessage } from 'element-plus'
// import { diffTokenTime } from '@/utils/auth'
// import store from '@/store'

// 封装axios为service接口
const service = axios.create({
    baseURL: '/api',
    timeout: 5000
})

// // 请求拦截器
// service.interceptors.request.use(
//     (config) => {
//         // 请求前do
//         if (localStorage.getItem('token')) {
//             if (diffTokenTime()) {
//                 store.dispatch('app/logout')
//                 return Promise.reject(new Error('token 失效了'))
//             }
//         }
//         config.headers.token = localStorage.getItem('token')
//         return config
//     },
//     (error) => {
//         // 错误请求do
//         return Promise.reject(new Error(error))
//     }
// )
//
// // 响应拦截器
// service.interceptors.response.use(
//     (response) => {
//         // 正确请求
//         const { code, msg, data } = response.data
//         if (code === 200 || code === 201) {
//             // console.log(obj)
//             // ElMessage.success(msg)
//             return data
//         } else {
//             ElMessage.error(msg)
//             return Promise.reject(new Error(msg))
//         }
//     },
//     (error) => {
//         console.log(error.response)
//         error.response && ElMessage.error(error.response.data.msg)
//         return Promise.reject(new Error(error.response.data))
//     }
// )
export default service
