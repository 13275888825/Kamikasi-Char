import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ hlsUrl }) => {
  return (
    <div>
      <ReactPlayer url={hlsUrl} controls width='640px' height='360px' />
    </div>
  );
};

export default VideoPlayer;
