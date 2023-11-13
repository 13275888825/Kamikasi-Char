/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-10 16:57:50
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-10 16:58:12
 * @FilePath: \KamikasiChar\src\components\RTMPPlayer\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// RTMPPlayer.js
import React, { useEffect, useRef } from 'react';
import flvjs from 'flv.js';

const RTMPPlayer = ({ rtmpUrl }) => {
  const videoRef = useRef(null);
  const flvPlayerRef = useRef(null);

  useEffect(() => {
    if (flvjs.isSupported()) {
      flvPlayerRef.current = flvjs.createPlayer({
        type: 'flv',
        url: rtmpUrl,
      });
      flvPlayerRef.current.attachMediaElement(videoRef.current);
      flvPlayerRef.current.load();
      flvPlayerRef.current.play();
    } else {
      console.error('flv.js is not supported on this browser.');
    }

    return () => {
      if (flvPlayerRef.current) {
        flvPlayerRef.current.pause();
        flvPlayerRef.current.unload();
        flvPlayerRef.current.detachMediaElement();
        flvPlayerRef.current.destroy();
      }
    };
  }, [rtmpUrl]);

  return (
    <div>
      <video ref={videoRef} controls width='640' height='360'></video>
    </div>
  );
};

export default RTMPPlayer;
