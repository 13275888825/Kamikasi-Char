const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.send('Server is running!');
});

wss.on('connection', (ws) => {
  console.log('New client connected');

  const outputFilePath = path.join(__dirname, 'public', 'oceans.mp4');
  const outputStream = fs.createWriteStream(outputFilePath);

  const ffmpegCommand = ffmpeg()
  .input('./public/oceans.mp4')
    .inputFormat('mp4')
    .videoCodec('libx264')
    .audioCodec('aac')
    .output(outputStream)
    .outputOptions(['-preset ultrafast', '-tune zerolatency'])
    .on('end', () => {
      console.log('FFmpeg command finished');
      outputStream.end();  // 结束文件写入流
    })
    .on('error', (err) => {
      console.error('Error:', err);
    });

  outputStream.on('data', (data) => {
    console.log('接收到data');
    ws.send(data, { binary: true });
  });

  outputStream.on('end', () => {
    console.log('FFmpeg stream finished');
  });

  outputStream.on('error', (err) => {
    console.error('Error:', err);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
    // Stop ffmpeg when the WebSocket connection is closed
    ffmpegCommand.kill('SIGKILL');
  });

  // 开始 ffmpeg 进程
  ffmpegCommand.run();
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});