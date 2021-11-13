// 导入axios
import axios from 'axios'
import {
    Message
} from 'element-ui'

// create axios instance
const service = axios.create({
    // read from env 
    baseURL: process.env.VUE_APP_BASE_API, // url = baseURL + requestURL,
    timeout: 500 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent 
        return config
    },
    error => {
        // do something with request error 
        console.log(error) // for debug 
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */
    response => {
        return response
    },
    error => {
        console.log('err:', error) // for debug 
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

// 导出axios实例        
export default service