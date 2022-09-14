import axios from "axios";
import { Message } from "element-ui";
import router from "@/router";

const service = axios.create({
  timeout: 6000,
  changeOrigin: true,//允许跨域
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

//请求拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  Message.error({ message: error })
})

//相应拦截器
service.interceptors.response.use(res => {
  if (res.status && res.status == 200) {
    if (res.data.message && res.data.code && res.data.code !== "成功") {
      Message({ message: res.data.message });
    }
    return res.data
  }
}, error => {
  console.log(error)
  Message({ message: '请求出错了❥(^_-)' });
})

export default service;