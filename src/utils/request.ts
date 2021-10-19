/*
 * @Author: your name
 * @Date: 2021-10-18 09:40:00
 * @LastEditTime: 2021-10-18 13:37:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\utils\request.ts
 */
import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000
});

if (process.env.NODE_ENV === "production") {
  service.defaults.baseURL = process.env.VUE_APP_BASE_URL;
}

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log("axios request", config);
  }, error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (config: AxiosRequestConfig) => {
    console.log("axios response", config);
  }, error => {
    Promise.reject(error);
  }
);

export default service;