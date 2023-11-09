import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ReactPlayer from 'react-player';

const App = () => {
  const hlsUrl =
    'http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/48c8a9475285890781000441992/playlist.m3u8';
  const hlsUrl2 = '/project/RealChar/playlist.m3u8';
  const hlsUrl3 = 'http://127.0.0.1:8080/playlist.m3u8';
  return (
    <div>
      <h1>React Hls.js Player</h1>
      <VideoPlayer hlsUrl={hlsUrl3} />
      {/* <ReactPlayer
        url={hlsUrl}
        controls
        width='640px'
        height='360px'
      ></ReactPlayer> */}
    </div>
  );
};

export default App;
