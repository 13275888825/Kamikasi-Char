import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    const player = new window.wsPlayer(
      'video',
      'ws://127.0.0.1:80/live/test.live.mp4'
    );
    player.open();

    // Cleanup when the component unmounts
    return () => {
      player.close(); // Assuming there's a method to close the player
    };
  }, []);

  return (
    <div>
      <video muted autoPlay id='video'></video>
    </div>
  );
};

export default VideoPlayer;
