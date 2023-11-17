/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:32:57
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-17 17:09:50
 * @FilePath: \Kamikasi-Char\src\my-node-api\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

// 静态文件服务
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
