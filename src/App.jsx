/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-10-17 12:15:58
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-13 12:58:39
 * @FilePath: \web\src\App.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * src/App.jsx
 *
 * created by Lynchee on 7/14/23
 */

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import intl from 'react-intl-universal';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import { signInWithGoogle } from './components/Auth/SignIn';
import AddCharacter from './components/addCharacter';
import AddRoom from './components/addRoom';
// Pages
import Settings from './pages/Settings';
import Conversation from './pages/Conversation';
import SharedConversation from './pages/SharedConversation';
import Home from './pages/Home2';
import CharCreate from './pages/CharCreate';
import CharDelete from './pages/CharDelete';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Help from './pages/Help';
import Char from './pages/Char';
import About from './pages/About';
// utils
import auth from './utils/firebase';

// Custom hooks
import useWebsocket from './hooks/useWebsocket';
import useMediaRecorder from './hooks/useMediaRecorder';
import useSpeechRecognition from './hooks/useSpeechRecognition';
import useWebRTC from './hooks/useWebRTC';
import useHark from './hooks/useVAD';
import Feed from './pages/Feed';
import Search from './pages/search';
import Login from './pages/Login';
import UserManagement from './pages/UserManage';
// import Create from './pages/Create';
import Community from './components/Community';
import { Outlet } from 'react-router-dom';
import Chats from './pages/Chats';
import ChatDetail from './pages/ChatDetail';
import Profile from './pages/Profile';
import ProfileSettings from './pages/ProfileSettings';
import ViewSaved from './components/ViewSaved';
import CreatePost from './components/CreatePost';
import Remove from './components/Remove';
import CreateImage from './components/CreateImage';
import ForgotPassword from './components/ForgetPassWord';
import Register from './components/Register';
import Talking from './pages/talking';
const locales = {
  en: require('./assets/locales/en-US.json'),
  zh: require('./assets/locales/zh-CN.json'),
};
const App = () => {
  const [sessionId, setSessionId] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('English');
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedModel, setSelectedModel] = useState('gpt-3.5-turbo-16k');
  const [useSearch, setUseSearch] = useState(false);
  const [useQuivr, setUseQuivr] = useState(false);
  const [quivrApiKey, setQuivrApiKey] = useState('');
  const [quivrBrainId, setQuivrBrainId] = useState('');
  const [useMultiOn, setUseMultiOn] = useState(false);
  const [useEchoCancellation, setUseEchoCancellation] = useState(false);
  const [user, setUser] = useState(null);
  const [videoSource, setVideoSource] = useState('');
  const isLoggedIn = useRef(false);
  const [token, setToken] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isResponding, setIsResponding] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [isCallView, setIsCallView] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState('');
  const [isTextStreaming, setIsTextStreaming] = useState(false);
  const [characterGroups, setCharacterGroups] = useState([]);
  const [characterConfirmed, setCharacterConfirmed] = useState(false);
  const [messageId, setMessageId] = useState('');
  const audioPlayer = useRef(null);
  const callActive = useRef(false);
  const harkInitialized = useRef(false);
  const audioSent = useRef(false);
  const shouldPlayAudio = useRef(false);
  const audioQueue = useRef([]);
  const videoQueue = useRef([]);
  const isConnecting = useRef(false);
  const isConnected = useRef(false);
  const isMobile = window.innerWidth <= 768;
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname, 'href');
    //加载个人信息的方法
    auth.onAuthStateChanged(async user => {
      setUser(user);
      if (user) {
        isLoggedIn.current = true;
        let curToken = await auth.currentUser.getIdToken();
        setToken(curToken);
      } else {
        isLoggedIn.current = false;
      }
    });
  }, []);
  useEffect(() => {
    let lang = (navigator.language || navigator.browserLanguage).toLowerCase();
    if (lang.indexOf('zh') >= 0) {
      localStorage.setItem('defaultLng', 'zh');
    } else {
      localStorage.setItem('defaultLng', 'en');
    }

    loadLocales();
  }, []);
  const loadLocales = () => {
    intl
      .init({
        currentLocale:
          localStorage.getItem('locale') ||
          localStorage.getItem('defaultLng') ||
          'zh',
        locales,
      })
      .then(() => {
        setInitDone(true);
      });
  };
  const stopAudioPlayback = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
      shouldPlayAudio.current = false;
    }
    audioQueue.current = [];
    setIsPlaying(false);
  };

  // Helper functions
  const handleSocketOnOpen = async event => {
    console.log('successfully connected');
    isConnected.current = true;
    await connectMicrophone(selectedDevice);
    if (!useEchoCancellation) {
      initializeSpeechRecognition();
    }
    await connectPeer(selectedDevice);
  };

  const handleSocketOnMessage = event => {
    if (typeof event.data === 'object') {
      const blob = new Blob([event.data], { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(blob);
      console.log(videoUrl, 'video');
      setVideoSource(videoUrl);
    }
    if (typeof event.data === 'string') {
      const message = event.data;
      if (!isTextStreaming) setIsTextStreaming(true);
      if (message === '[end]\n' || message.match(/\[end=([a-zA-Z0-9]+)\]/)) {
        setIsTextStreaming(false);
        setIsResponding(false);
        setTextAreaValue(prevState => prevState + '\n\n');
        const messageIdMatches = message.match(/\[end=([a-zA-Z0-9]+)\]/);
        if (messageIdMatches) {
          const messageId = messageIdMatches[1];
          setMessageId(messageId);
        }
      } else if (message === '[thinking]\n') {
        setIsThinking(true);
      } else if (message.startsWith('[+]You said: ')) {
        // [+] indicates the transcription is done. stop playing audio
        let msg = message.split('[+]You said: ');
        setTextAreaValue(prevState => prevState + `\nYou> ${msg[1]}\n`);
        stopAudioPlayback();
      } else if (
        message.startsWith('[=]' || message.match(/\[=([a-zA-Z0-9]+)\]/))
      ) {
        // [=] or [=id] indicates the response is done
        setTextAreaValue(prevState => prevState + '\n\n');
      } else {
        setIsThinking(false);
        setIsResponding(true);
        setTextAreaValue(prevState => prevState + `${event.data}`);

        // if user interrupts the previous response, should be able to play audios of new response
        shouldPlayAudio.current = true;
      }
    } else {
      // binary data
      if (!shouldPlayAudio.current) {
        console.log('should not play audio');
        return;
      }
      audioQueue.current.push(event.data);
      if (audioQueue.current.length === 1) {
        setIsPlaying(true); // this will trigger playAudios in CallView.
      }
    }
  };

  const handleOnTrack = event => {
    if (event.streams && event.streams[0]) {
      audioPlayer.current.srcObject = event.streams[0];
    }
  };

  // Use custom hooks
  const { socketRef, send, connectSocket, closeSocket } = useWebsocket(
    token,
    handleSocketOnOpen,
    handleSocketOnMessage,
    selectedModel,
    preferredLanguage,
    useSearch,
    useQuivr,
    useMultiOn,
    selectedCharacter,
    setSessionId
  );
  const {
    isRecording,
    setIsRecording,
    connectMicrophone,
    startRecording,
    stopRecording,
    closeMediaRecorder,
  } = useMediaRecorder(isConnected, audioSent, callActive, send, closeSocket);
  const {
    startListening,
    stopListening,
    closeRecognition,
    initializeSpeechRecognition,
  } = useSpeechRecognition(
    callActive,
    preferredLanguage,
    shouldPlayAudio,
    isConnected,
    audioSent,
    stopAudioPlayback,
    send,
    startRecording,
    stopRecording,
    setTextAreaValue
  );
  const {
    pcRef,
    otherPCRef,
    micStreamRef,
    audioContextRef,
    incomingStreamDestinationRef,
    connectPeer,
    closePeer,
  } = useWebRTC(handleOnTrack);
  const { speechEventsCallback, enableHark, disableHark } = useHark();
  const connectSocketWithState = useCallback(() => {
    isConnecting.current = true;
    connectSocket();
    isConnecting.current = false;
  }, [isConnecting, connectSocket]);

  const closeSocketWithState = () => {
    closeSocket();
  };

  // Handle Button Clicks
  const connect = async () => {
    try {
      // requires login if user wants to use gpt4 or claude.
      if (selectedModel !== 'gpt-3.5-turbo-16k') {
        if (isLoggedIn.current) {
          connectSocketWithState();
        } else {
          signInWithGoogle(isLoggedIn, setToken).then(() => {
            if (isLoggedIn.current) {
              connectSocketWithState();
            }
          });
        }
      } else {
        connectSocketWithState();
      }
    } catch (error) {
      console.error('Error during sign in or connect:', error);
    }
  };

  const handleStopCall = () => {
    if (useEchoCancellation) {
      setIsRecording(false);
      disableHark();
    } else {
      stopRecording();
      stopListening();
    }
    stopAudioPlayback();
    callActive.current = false;
  };

  const handleContinueCall = () => {
    if (useEchoCancellation) {
      if (!harkInitialized.current) {
        speechEventsCallback(
          micStreamRef.current,
          () => {
            stopAudioPlayback();
            startRecording();
          },
          () => {
            // Stops recording and send interim audio clip to server.
            send('[&Speech]');
            stopRecording();
          },
          () => {
            send('[SpeechFinished]');
          }
        );
        harkInitialized.current = true;
      }
      setIsRecording(true);
      enableHark();
    } else {
      setIsRecording(true);
      startRecording();
      startListening();
    }
    shouldPlayAudio.current = true;
    callActive.current = true;
  };

  const handleDisconnect = () => {
    if (socketRef && socketRef.current) {
      // stop media recorder, speech recognition and audio playing
      stopAudioPlayback();
      closeMediaRecorder();
      if (!useEchoCancellation) {
        closeRecognition();
      }
      closePeer();
      callActive.current = false;
      shouldPlayAudio.current = false;
      audioSent.current = false;
      harkInitialized.current = false;

      // reset everything to initial states
      setSelectedCharacter(null);
      setCharacterConfirmed(false);
      setCharacterGroups([]);
      setIsCallView(false);
      setTextAreaValue('');
      setSelectedModel('gpt-3.5-turbo-16k');
      setPreferredLanguage('English');

      // close web socket connection
      closeSocketWithState();
      isConnected.current = false;
    }
  };
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {' '}
                <Header
                  user={user}
                  isLoggedIn={isLoggedIn}
                  setToken={setToken}
                  handleDisconnect={handleDisconnect}
                />
                <Outlet></Outlet>
                <Footer />
              </>
            }
          >
            <Route index element={<Home />}></Route>
            <Route
              path='/settings'
              element={
                <Settings
                  setSelectedCharacter={setSelectedCharacter}
                  isMobile={isMobile}
                  preferredLanguage={preferredLanguage}
                  setPreferredLanguage={setPreferredLanguage}
                  selectedDevice={selectedDevice}
                  setSelectedDevice={setSelectedDevice}
                  selectedModel={selectedModel}
                  setSelectedModel={setSelectedModel}
                  isLoggedIn={isLoggedIn}
                  token={token}
                  setToken={setToken}
                  useSearch={useSearch}
                  setUseSearch={setUseSearch}
                  useQuivr={useQuivr}
                  setUseQuivr={setUseQuivr}
                  quivrApiKey={quivrApiKey}
                  setQuivrApiKey={setQuivrApiKey}
                  quivrBrainId={quivrBrainId}
                  setQuivrBrainId={setQuivrBrainId}
                  useMultiOn={useMultiOn}
                  setUseMultiOn={setUseMultiOn}
                  useEchoCancellation={useEchoCancellation}
                  setUseEchoCancellation={setUseEchoCancellation}
                  send={send}
                  connect={connect}
                  setIsCallView={setIsCallView}
                  shouldPlayAudio={shouldPlayAudio}
                />
              }
            />
            <Route
              path='/conversation'
              element={
                <Conversation
                  isConnecting={isConnecting}
                  isConnected={isConnected}
                  isCallView={isCallView}
                  isRecording={isRecording}
                  isPlaying={isPlaying}
                  isThinking={isThinking}
                  isResponding={isResponding}
                  audioPlayer={audioPlayer}
                  handleStopCall={handleStopCall}
                  handleContinueCall={handleContinueCall}
                  audioQueue={audioQueue}
                  audioContextRef={audioContextRef}
                  audioSourceNodeRef={incomingStreamDestinationRef}
                  setIsPlaying={setIsPlaying}
                  handleDisconnect={handleDisconnect}
                  setIsCallView={setIsCallView}
                  send={send}
                  stopAudioPlayback={stopAudioPlayback}
                  textAreaValue={textAreaValue}
                  setTextAreaValue={setTextAreaValue}
                  messageInput={messageInput}
                  setMessageInput={setMessageInput}
                  useSearch={useSearch}
                  setUseSearch={setUseSearch}
                  setUseEchoCancellation={setUseEchoCancellation}
                  callActive={callActive}
                  startRecording={startRecording}
                  stopRecording={stopRecording}
                  preferredLanguage={preferredLanguage}
                  setPreferredLanguage={setPreferredLanguage}
                  selectedCharacter={selectedCharacter}
                  setSelectedCharacter={setSelectedCharacter}
                  setSelectedModel={setSelectedModel}
                  setSelectedDevice={setSelectedDevice}
                  setUseMultiOn={setUseMultiOn}
                  connect={connect}
                  messageId={messageId}
                  token={token}
                  isTextStreaming={isTextStreaming}
                  sessionId={sessionId}
                  videoSource={videoSource}
                />
              }
            />
            <Route path='/shared' element={<SharedConversation />} />
            <Route path='/create' element={<CharCreate />} />
            <Route
              path='/delete'
              element={
                <CharDelete
                  // token={token}
                  isMobile={isMobile}
                  characterGroups={characterGroups}
                />
              }
            />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/support' element={<Support />} />
            <Route path='/home' element={<Home />} />
            <Route path='/feed' element={<Feed />} />
            <Route path='/chats' element={<Chats />} />
            <Route path='/chats/char' element={<Char />} />
            <Route path='/addCharacter' element={<AddCharacter />} />
            <Route path='/addRoom' element={<AddRoom />} />
            <Route path='/community' element={<Community />} />
          </Route>
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chatDetail' element={<ChatDetail />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profilesettings' element={<ProfileSettings />} />
          <Route path='/viewSave' element={<ViewSaved />} />
          <Route path='/createPost' element={<CreatePost />} />
          <Route path='/remove' element={<Remove />} />
          <Route path='/userManage' element={<UserManagement />} />
          <Route path='/createImage' element={<CreateImage />} />
          <Route path='/about' element={<About />} />
          <Route path='/forgetPassWord' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/Help' element={<Help videoSource={videoSource} />} />
          <Route path='/talking' element={<Talking />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
