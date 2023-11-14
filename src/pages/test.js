import React, { useState, useEffect } from 'react';
import videojs from 'video.js';

// 注意：样式文件需要引入
import 'video.js/dist/video-js.css';
import { Modal } from 'antd';

const url = 'rtmp://58.200.131.2:1935/livetv/hunantv';

const PlayerModal = props => {
  const { visible, onClose } = props;

  const [videoNode, setVideoNode] = useState();

  useEffect(() => {
    if (videoNode) {
      const videoJsOptions = {
        autoplay: true, // 自动播放
        language: 'zh-CN',
        preload: 'auto', // 自动加载
        errorDisplay: true, // 错误展示
        width: 475, // 宽
        height: 300,
        flash: {
          swf: '/video-js.swf',
        },
        sources: [
          {
            src: url,
            type: 'rtmp/flv', // 类型可加可不加，目前未看到影响
          },
        ],
      };
      videojs(videoNode, videoJsOptions);
    }
  }, [videoNode]);

  const onPlayerClose = () => {
    onClose();
  };

  return (
    <>
      <Modal
        visible={visible}
        title='预览'
        onOk={onPlayerClose}
        onCancel={onPlayerClose}
        maskClosable={false}
        destroyOnClose
      >
        <video
          ref={node => {
            setVideoNode(node);
          }}
          id='videoPlay'
          className='video-js vjs-default-skin vjs-big-play-centered'
          width='100%'
          height='100%'
        >
          <track kind='captions' />
          <p className='vjs-no-js'>您的浏览器不支持HTML5，请升级浏览器。</p>
        </video>
      </Modal>
    </>
  );
};

export default PlayerModal;
