/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-09 19:00:46
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-10 11:11:20
 * @FilePath: \KamikasiChar\src\components\VideoPlayer\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';
import * as WebSocket from 'websocket';

function WebSocketVideoPlayer({ url }) {
  const videoRef = useRef(null);
  const websocket = useRef(null);

  useEffect(() => {
    // Create a new WebSocket connection when the component mounts
    websocket.current = new WebSocket.w3cwebsocket(url);
    console.log(window.location.host, '0000');
    // Set up WebSocket event handlers
    websocket.current.onopen = () => {
      console.log('WebSocket connection opened');
    };

    websocket.current.onmessage = message => {
      if (message.data instanceof Blob) {
        // If the message data is a Blob (binary data), update the video source
        const videoBlob = new Blob([message.data], { type: 'video/mp4' });
        const videoUrl = URL.createObjectURL(videoBlob);
        videoRef.current.src = videoUrl;
      }
    };

    websocket.current.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      // Cleanup: Close the WebSocket connection when the component unmounts
      if (websocket.current) {
        websocket.current.close();
      }
    };
  }, [url]);

  return (
    <div>
      <video ref={videoRef} controls autoPlay width='640' height='480'></video>
    </div>
  );
}

export default WebSocketVideoPlayer;
