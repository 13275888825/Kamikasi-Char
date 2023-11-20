/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:34:04
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-20 13:10:59
 * @FilePath: \Kamikasi-Char\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const { sendMessage, lastMessage } = useWebSocket('ws://localhost:8080');

  useEffect(() => {
    sendMessage('前端发来的');
    sendMessage('/videostart');
    if (lastMessage) {
      console.log('从服务器接收到消息:', lastMessage.data);
      // 处理从服务器接收到的视频数据
      const videoData = lastMessage.data;
      // 处理视频数据，这取决于你的视频显示方式
      // 在这个例子中，假设你有一个 video 元素来显示视频
      const videoBlob = new Blob([videoData], { type: 'video/mp4' });
      console.log(videoBlob, 'videoBlob');
      const videoUrl = URL.createObjectURL(videoData);
      if (videoRef.current) {
        videoRef.current.src = videoUrl;
      }
      console.log(videoRef.current.src, 'src');
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
