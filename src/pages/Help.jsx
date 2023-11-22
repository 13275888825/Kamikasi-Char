import React, { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoSource }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.src = videoSource;
  }, []);

  return (
    <div>
      <h2>Video Player Component</h2>
      <video ref={videoRef} controls width='400' height='300' />
    </div>
  );
};

export default VideoPlayer;
