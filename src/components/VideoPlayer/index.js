import React, { useRef, useEffect } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ hlsUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (Hls.isSupported()) {
        console.log('支持');
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        console.log(videoElement, 'lllll');
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = hlsUrl;
      }
    }
  }, [hlsUrl]);

  return (
    <div>
      <video ref={videoRef} controls width='450' height='450' />
    </div>
  );
};

export default VideoPlayer;
