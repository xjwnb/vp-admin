/*
 * @Author: your name
 * @Date: 2021-10-18 08:50:52
 * @LastEditTime: 2021-10-19 17:32:59
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
    message: "OK",
    data: [
      {
        hidden: false,
        name: "表格",
        path: "/table",
        component: 'Layout',
        children: [
          {
            component: "tablePane/index.vue",
            name: "tablePane",
            meta: {
              breadcrumb: true,
              title: "表格面板",
              roles: ['editor']
            },
          }
        ]
      }
    ]
  });
})

app.listen(7777, () => {
  console.log("服务器工作中...");
});
