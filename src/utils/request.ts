/*
 * @Author: your name
 * @Date: 2021-10-18 09:40:00
 * @LastEditTime: 2021-10-19 10:59:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\src\utils\request.ts
 */
import axios, { AxiosRequestConfig, AxiosInstance, AxiosError, AxiosRequestHeaders } from 'axios';

const service: any = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
});

service.defaults.headers["Content-Type"] = "application/json;charset=utf-8;"

if (process.env.NODE_ENV === "production") {
  service.defaults.baseURL = process.env.VUE_APP_BASE_URL;
}

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    console.log("axios request", config);
    return config;
  }, (error: AxiosError) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (config: AxiosRequestConfig) => {
    console.log("axios response", config);
    return config.data;
  }, (error: AxiosError) => {
    Promise.reject(error);
  }
);

export default service;