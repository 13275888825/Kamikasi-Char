/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-14 15:43:35
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-14 16:15:13
 * @FilePath: \KamikasiChard:\websocket\node\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.send('Server is running!');
});

wss.on('connection', ws => {
  console.log('New client connected');
  // eslint-disable-next-line no-undef
  wss.clients.forEach(client => {
    client.send('连接上了');
  });
  // Listen for messages from clients
  ws.on('message', message => {
    // eslint-disable-next-line no-undef
    const buffer = Buffer.from(message);

    // 使用 TextDecoder 将 Buffer 转为字符串
    const decoder = new TextDecoder('utf-8');
    const text = decoder.decode(buffer);
    console.log(text, 'message'); // 输出："你好"
    // Broadcast the message to all clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(text);
      }
    });
  });

  // Handle client disconnection
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
