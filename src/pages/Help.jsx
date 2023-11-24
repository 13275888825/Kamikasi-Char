/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:34:04
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-24 09:42:56
 * @FilePath: \Kamikasi-Char\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect, useRef } from 'react';

const WsPlayerComponent = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const scriptMp4box = document.createElement('script');
    scriptMp4box.src = './mp4box.all.min.js';
    scriptMp4box.async = true;
    document.body.appendChild(scriptMp4box);

    const scriptWsPlayer = document.createElement('script');
    scriptWsPlayer.src = './wsPlayer.js';
    scriptWsPlayer.async = true;
    document.body.appendChild(scriptWsPlayer);

    return () => {
      document.body.removeChild(scriptMp4box);
      document.body.removeChild(scriptWsPlayer);
    };
  }, []);

  useEffect(() => {
    // 在组件挂载后执行初始化
    const player = new window.wsPlayer(
      'video',
      'ws://127.0.0.1:8080/live/test.live.mp4'
    );
    player.open();
    console.log(player, 'player');
    // 如果需要在组件卸载时清理资源，可以在这里返回清理函数
    return () => {
      // 清理逻辑
    };
  }, []); // 传入空数组表示仅在挂载时执行

  return (
    <div>
      <video muted autoPlay ref={videoRef} id='video'></video>
    </div>
  );
};

export default WsPlayerComponent;
