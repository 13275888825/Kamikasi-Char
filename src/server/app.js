const path = require('path');
const fs = require('fs');
const WebSocket = require('ws');
const http = require('http');
const child_process = require('child_process');

// 获取视频文件路径
const videoFilePath = path.join(__dirname, 'public', 'Obama.mp4');

// 创建 HTTP 服务器
const server = http.createServer();

// 创建 WebSocket 服务器
const wss = new WebSocket.Server({ server });

// 当有 WebSocket 连接时
wss.on('connection', (ws) => {
  // 向客户端发送消息
  ws.send('Connected to WebSocket server');

  // 开始推送视频流
  const ffmpegProcess = child_process.spawn('ffmpeg', [
    '-i', videoFilePath,
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-strict', 'experimental',
    '-f', 'flv',
    'pipe:1',
  ]);

  // 将视频流发送到 WebSocket
  ffmpegProcess.stdout.on('data', (data) => {
    ws.send(data);
  });

  // 处理关闭连接
  ws.on('close', () => {
    // 终止 ffmpeg 进程
    ffmpegProcess.kill('SIGINT');
  });
});

// 监听 HTTP 服务器端口
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`WebSocket stream available at ws://localhost:${PORT}`);
});
