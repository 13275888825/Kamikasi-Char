/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-09 19:00:46
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-11-13 09:32:47
 * @FilePath: \KamikasiChar\src\pages\Help.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactPlayer from 'react-player';

const RTMPPlayer = () => {
  const rtmpUrl = 'rtmp://your-rtmp-server-url/your-stream-key';

  return (
    <div>
      <ReactPlayer
        url={rtmpUrl}
        width='100%'
        height='100%'
        controls={true}
        playing={true}
      />
    </div>
  );
};

export default RTMPPlayer;
