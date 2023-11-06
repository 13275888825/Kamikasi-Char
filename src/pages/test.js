/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { Layout, Space, Input, Button, Modal, Dropdown } from 'antd';
import {
  UserOutlined,
  CopyOutlined,
  SendOutlined,
  QqCircleFilled,
  RedditSquareFilled,
  TaobaoSquareFilled,
  ZhihuSquareFilled,
  DownOutlined,
} from '@ant-design/icons';
import {
  LeftOutlined,
  ShareAltOutlined,
  MoreOutlined,
  SaveOutlined,
  FolderViewOutlined,
  FolderAddOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import style from './ChatDetail.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Avatar from '@mui/material/Avatar';
import useAvatarView from '../components/AvatarView';
import lz from 'lz-string';

const { Search } = Input;

const CombinedComponent = ({
  isConnecting,
  isConnected,
  isRecording,
  isPlaying,
  isThinking,
  isResponding,
  audioPlayer,
  handleStopCall,
  handleContinueCall,
  audioQueue,
  audioContextRef,
  audioSourceNodeRef,
  setIsPlaying,
  handleDisconnect,
  isCallView,
  setIsCallView,
  send,
  stopAudioPlayback,
  textAreaValue,
  setTextAreaValue,
  messageInput,
  setMessageInput,
  setUseSearch,
  setUseEchoCancellation,
  callActive,
  startRecording,
  stopRecording,
  setPreferredLanguage,
  selectedCharacter,
  messageId,
  token,
  isTextStreaming,
  sessionId,
  setSelectedCharacter,
  setSelectedModel,
  setSelectedDevice,
  setUseMultiOn,
  connect,
}) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const {
    character = '',
    selectedModel = '',
    selectedDevice = '',
    isCallViewParam = '',
    preferredLanguage = '',
    useSearchParam = '',
    useEchoCancellationParam = '',
    useMultiOnParam = '',
  } = queryString.parse(search);
  const isCallViewUrl = isCallViewParam === 'true';
  const useSearch = useSearchParam === 'true';
  const useEchoCancellation = useEchoCancellationParam === 'true';
  const useMultiOn = useMultiOnParam === 'true';
  const message = isTextStreaming ? '' : textAreaValue;
  const [emotion, setEmotion] = useState('');

  const { avatarDisplay, playAudioFromNode } = useAvatarView(
    selectedCharacter?.avatar_id,
    emotion
  );

  useEffect(() => {
    // eslint-disable-next-line no-undef
    const emotion = extractEmotionFromPrompt(message);
    if (emotion && emotion.length > 0) setEmotion(emotion);
  }, [message]);

  useEffect(() => {
    if (
      character === '' ||
      selectedModel === '' ||
      selectedDevice === '' ||
      isCallViewUrl === '' ||
      preferredLanguage === '' ||
      useSearch === '' ||
      useEchoCancellation === ''
    ) {
      navigate('/');
    }
    const paramSelectedCharacter = JSON.parse(
      lz.decompressFromEncodedURIComponent(character)
    );
    setSelectedCharacter(paramSelectedCharacter);

    setSelectedModel(selectedModel);

    setSelectedDevice(selectedDevice);

    setIsCallView(isCallViewUrl);

    setPreferredLanguage(preferredLanguage);

    setUseSearch(useSearch);

    setUseEchoCancellation(useEchoCancellation);

    setUseMultiOn(useMultiOn);
  }, []);

  useEffect(() => {
    if (!isConnecting.current) {
      const tryConnect = async () => {
        try {
          // requires login if the user wants to use gpt4 or claude.
          connect();
        } catch (error) {
          console.error(error);
        }
      };
      tryConnect();
    }

    const handleUnload = event => {
      event.preventDefault();
      navigate('/');
    };
    window.addEventListener('beforeunload', handleUnload);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [connect]);

  if (!isConnected.current) {
    return null;
  }

  return (
    <div className={style.chat}>
      <div className={style.header}>
        <div className={style.desc}>
          <div className={style.left}>
            <LeftOutlined onClick={toHome} className={style.leftIcon} />
            <div className={style.character}>
              <div className={style.top}>
                <h4 className={style.characterName}>
                  {selectedCharacter.name}
                </h4>
                <span className={style.tip}>17.9m</span>
              </div>
              <div className={style.bottom}>
                <span className={style.by}>Created by</span>
                <div className={style.aite}>@elonwhisperer</div>
              </div>
            </div>
          </div>
          <div className={style.right}>
            <ShareAltOutlined
              style={{ color: '#fff' }}
              className={style.icon}
              onClick={share}
            />
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={e => e.preventDefault()}>
                <Space>
                  <MoreOutlined className={style.icon} />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
        <div className={style.remember}>
          Remember: Everything Characters say is made up!
        </div>
      </div>

      <div
        className={style.content}
        style={{ display: isConnected ? 'block' : 'none' }}
      >
        {isCallView ? (
          // eslint-disable-next-line react/jsx-no-undef
          <CallView
            isRecording={isRecording}
            isPlaying={isPlaying}
            isResponding={isResponding}
            audioPlayer={audioPlayer}
            // Pass other props as needed
          />
        ) : (
          // eslint-disable-next-line react/jsx-no-undef
          <TextView
          // Pass relevant props from "Conversation" component
          />
        )}
      </div>

      <div className={style.foot}>
        <Input placeholder='type a message' />
        <Button type='primary'>
          <SendOutlined />
        </Button>
      </div>

      <Modal
        title='Share Character'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {/* ... (Modal JSX from "ChatDetail") */}
      </Modal>
    </div>
  );
};

export default CombinedComponent;
