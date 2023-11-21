/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:32:57
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-21 16:22:12
 * @FilePath: \Kamikasi-Char\src\my-node-api\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const WebSocket = require('ws');
const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
// eslint-disable-next-line no-undef
app.use(express.static(path.join(__dirname, 'public')));
wss.on('connection', ws => {
  console.log('WebSocket连接已建立');

  // 读取MP4文件
  const videoStream = fs.createReadStream('./public/Obama.mp4');

  // 监听WebSocket连接关闭事件
  ws.on('close', () => {
    console.log('WebSocket连接已关闭');
    videoStream.destroy();
  });

  // 监听WebSocket客户端发送的消息
  ws.on('message', message => {
    console.log('从客户端接收到消息:', message);
    if (message == '/videostart') {
      // 处理"/videostart"消息，开始向客户端发送视频数据
      console.log('开始播放视频...');
      ws.send(JSON.stringify({ type: 'video/mp4' }));
      videoStream.on('data', chunk => {
        // 将视频数据推送到WebSocket连接
        console.log(chunk, 'chunk');
        ws.send(chunk);
      });
    }
  });
});

server.listen(8080, () => {
  console.log('服务器正在监听端口8080');
});
