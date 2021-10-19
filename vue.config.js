/*
 * @Author: your name
 * @Date: 2021-10-14 14:02:56
 * @LastEditTime: 2021-10-18 09:36:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\vue.config.js
 */
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devServer: {
      proxy: {
        [process.env.VUE_APP_BASE_API]: {
          target: process.env.VUE_APP_BASE_URL,
          changeOrigin: true,
          pathRewrite: {
            ["^" + process.env.VUE_APP_BASE_API]: "",
          },
        },
      },
    },
  },
};
