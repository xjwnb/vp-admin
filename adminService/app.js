/*
 * @Author: your name
 * @Date: 2021-10-18 08:50:52
 * @LastEditTime: 2021-10-18 13:49:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vp-admin\adminService\app.js
 */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("index");
  res.send("HELLO");
});

/**
 * 获取路由
 */
app.get("/getRouters", (req, res) => {
  console.log("/getRouters");
  res.send({
    code: 200,
    data: [
      {
        hidden: true,
        name: "login",
        meta: {
          breadcrumb: false,
        },
        path: "/login",
        component: 'src/views/login'
      }
    ]
  });
})

app.listen(7777, () => {
  console.log("服务器工作中...");
});
