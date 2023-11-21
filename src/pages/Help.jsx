/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:34:04
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-21 16:49:52
 * @FilePath: \Kamikasi-Char\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';
import useWebSocket from 'react-use-websocket';
import Videojs from 'video.js';
import 'videojs-contrib-hls.js';
import 'video.js/dist/video-js.css';
window.videojs = Videojs;
import('video.js/dist/lang/zh-CN.js');
const VideoPlayer = () => {
  const videoRef = useRef(null);
  const videoInstance = useRef(null);
  const videoInstance2 = useRef(null);
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
    const videoInstance = Videojs(
      'videoBox',
      {
        muted: true,
        preload: true,
        language: 'zh-CN',
        // fluid: true,
        sources: [
          //{
          //  type: 'application/x-mpegURL',
          //  src: 'http://192.168.1.62:1935/live/123.m3u8',
          //},
          {
            type: 'video/mp4',
            src: '/Obama.mp4',
          },
        ],
        notSupportedMessage: '无法播放',
      },
      () => {
        videoInstance.play();
      }
    );
    const videoInstance2 = Videojs(
      'videoBox2',
      {
        muted: true,
        preload: true,
        language: 'zh-CN',
        sources: [
          {
            type: 'application/x-mpegURL',
            src: '/123.m3u8',
          },
        ],
        notSupportedMessage: '无法播放',
      },
      () => {
        videoInstance.play();
      }
    );
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
        <video ref={videoRef} controls width='400' height='400' />
      </div>
      <div>
        <video
          autoPlay
          loop
          className='video-js vjs-default-skin'
          width={400}
          height={400}
          id='videoBox'
          controls
        />
      </div>
      <div>
        <video
          autoPlay
          loop
          className='video-js vjs-default-skin'
          width={400}
          height={400}
          id='videoBox2'
          controls
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
