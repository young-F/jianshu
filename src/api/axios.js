// import axios from "axios"; // 导入axios包
// import qs from "qs"; // 导入qs包 用来处理字符串的
// axios.defaults.baseURL = "http://127.0.0.1:9999"; // 设置默认的请求域
// axios.defaults.timeout = 10000; //覆写库的超时默认值
// axios.defaults.withCredentials = true; //表示跨域请求时是否需要使用凭证 false不需要 true需要
// axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"; //Content-Type（内容类型
// axios.defaults.transformRequest = (data) => qs.stringify(data); // 允许在向服务器发送前，修改请求数据
// /*
// axios.interceptors.request.use(config => {
//     let token = localStorage.getItem('token');
//     token && (config.headers.Authorization = token);
//     return config;
// }, error => {
//     return Promise.reject(error);
// });
// axios.defaults.validateStatus = status => {
//     return /^(2|3)\d{2}$/.test(status);
// };
// */

// // 响应拦截器
// axios.interceptors.response.use(
//   (response) => {
//     return response.data;
//   },
//   (error) => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//           break;
//         case 403:
//           break;
//         case 404:
//           break;
//       }
//     } else {
//       if (!window.navigator.onLine) {
//         return;
//       }
//       return Promise.reject(error);
//     }
//   }
// );
// export default axios;
