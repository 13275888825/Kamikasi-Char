/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-09 19:00:46
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-17 17:13:01
 * @FilePath: \KamikasiChar\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';
// import Hls from 'hls.js';
import Videojs from 'video.js';
import 'videojs-contrib-hls.js';
import 'video.js/dist/video-js.css';
import useWebSocket from 'react-use-websocket';
window.videojs = Videojs;
import('video.js/dist/lang/zh-CN.js');

const HlsVideoPlayer = () => {
  const videoInstance = useRef(null);
  const videoInstance2 = useRef(null);
  const socketUrl = 'ws://localhost:8080';
  const { sendMessage, lastMessage } = useWebSocket(socketUrl);
  useEffect(() => {
    console.log('123');
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
        // fluid: true,
        sources: [
          {
            type: 'application/x-mpegURL',
            src: '/output.m3u8',
          },
        ],
        notSupportedMessage: '无法播放',
      },
      () => {
        videoInstance2.play();
      }
    );
  }, [videoInstance, videoInstance2]);
  useWebSocket(socketUrl, {
    onOpen: () => {
      console.log('WebSocket connection established.');
    },
    onMessage: message => {
      console.log(message.data, '00000');
      // eslint-disable-next-line no-undef
      console.log(`Received from server: ${message.data}`);
    },
    onClose: () => {
      console.log('Disconnected from WebSocket');
    },
  });
  return (
    <>
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
    </>
  );
};

export default HlsVideoPlayer;
