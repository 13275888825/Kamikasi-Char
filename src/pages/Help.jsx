import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const App = () => {
  const hlsUrl = '../';

  return (
    <div>
      <h1>ReactPlayer HLS Video Player</h1>
      <VideoPlayer hlsUrl={hlsUrl} />
    </div>
  );
};

export default App;
