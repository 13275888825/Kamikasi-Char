import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    const authToken = localStorage.getItem('token'); // 或者从你的状态管理库中获取
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axios;
