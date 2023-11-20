/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:34:04
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-20 15:27:10
 * @FilePath: \Kamikasi-Char\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    'ws://localhost:8080'
  );
  useEffect(() => {
    // 当 WebSocket 连接打开时
    if (readyState === 1) {
      // 发送消息到服务器
      sendMessage('/videostart');
    }
  }, [sendMessage, readyState]);

  useEffect(() => {
    if (lastMessage) {
      console.log('从服务器接收到消息:', lastMessage.data);
      // 处理从服务器接收到的视频数据
      const videoData = lastMessage.data;
      // 处理视频数据，这取决于你的视频显示方式
      const videoDataArrayBuffer = new TextEncoder().encode(videoData);
      const videoBlob = new Blob([videoDataArrayBuffer], { type: 'video/mp4' });
      console.log(videoBlob, 'videoBlob');
      // 在这里处理视频数据的显示逻辑
      const videoUrl = URL.createObjectURL(videoBlob);
      if (videoRef.current) {
        videoRef.current.src = videoUrl;
      }

      console.log(videoBlob, 'videoBlob');
      console.log(videoRef.current, 'src');
    }
  }, [lastMessage]);

  return (
    <div>
      <div>
        <video ref={videoRef} controls width='600' height='400' />
      </div>
    </div>
  );
};

export default VideoPlayer;
