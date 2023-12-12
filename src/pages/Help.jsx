/* eslint-disable no-unreachable */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable prettier/prettier */
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import Stats from 'three/addons/libs/stats.module.js';
const Help = () => {
  const [tracks, setTracks] = useState('');
  const containerRef = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    2000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const stats = new Stats();
  const clock = new THREE.Clock();
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [wsUrl, setWsUrl] = useState('');
  const [status, setStatus] = useState(0);
  var actionStatus;
  let mixer;

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8081');
    // 监听连接打开事件
    newSocket.addEventListener('open', event => {
      console.log('WebSocket连接已打开', event);
    });

    // 监听接收消息事件
    newSocket.addEventListener('message', event => {
      console.log(event.data,'data');
      localStorage.setItem('status',event.data)
    });
    console.log('before');
    init();
    console.log('after');
    animate();

    return () => {
      // Clean up resources (if needed) when the component is unmounted
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount
  const init = () => {
    camera.position.set(100, 200, 300);
    scene.background = new THREE.Color(0xa0a0a0);
    scene.fog = new THREE.Fog(0xa0a0a0, 200, 1000);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 200, 0);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(0, 200, 100);
    dirLight.castShadow = true;
    dirLight.shadow.camera.top = 180;
    dirLight.shadow.camera.bottom = -100;
    dirLight.shadow.camera.left = -120;
    dirLight.shadow.camera.right = 120;
    scene.add(dirLight);

    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2000, 2000),
      new THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false })
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.receiveShadow = true;
    scene.add(mesh);

    const grid = new THREE.GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.2;
    grid.material.transparent = true;
    scene.add(grid);
    const status = localStorage.getItem('status');
    console.log(status,'status');

    const url = getStatus(status);
    console.log(url,'url');
    console.log(getStatus('-1'));
    const loader = new FBXLoader();
    loader.load(url, object => {
      console.log(object, 'obj');
      setTracks(object.animations[0].tracks);
      //模型
      loader.load('/api4/fbx/Monica_Expression.fbx', fbx => {
        mixer = new THREE.AnimationMixer(fbx);
        // console.log(object.animations[0].tracks,'nnnnnn');
        // console.log(fbx.animations[0].tracks,'lllll');
        fbx.animations[0] = object.animations[0];
        // console.log(fbx.animations[0].tracks,'mmmmmm');
        const action = mixer.clipAction(fbx.animations[0]);
        console.log(action, 'aaaaa');
        action.play();

        fbx.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(fbx);
      });
      // action.play()
      // object.traverse((child) => {
      //   if (child.isMesh) {
      //     child.castShadow = true;
      //     child.receiveShadow = true;
      //   }
      // });
      // // return 1;
      // scene.add(object);
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 100, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize);

    stats.dom.style.position = 'absolute';
    stats.dom.style.top = '0';
    containerRef.current.appendChild(stats.dom);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    if (mixer) mixer.update(delta);

    renderer.render(scene, camera);
    stats.update();
  };

  const getStatus = (val)=>{
   console.log(val,'pppp');
   return (
    val == '-1' ?  "/api4/fbx/Monica_Standing%20Greeting.fbx":
    val == '1'  ?  "/api4/fbx/Monica_Talk01.fbx":
    val == '2'  ?  "/api4/fbx/Monica01_allaboutthatbass.fbx": 
    val == '3'  ? "/api4//fbx/Monica_Chat_Sitting.fbx":
    val == '4'  ? "/api4/fbx/Monica_handshakes.fbx":
    val == '5'  ? "/api4/fbx/Monica_LeaningChat.fbx":
    val == '6'  ? "/api4/fbx/Monica_MoveGreet.fbx":
    val == '7'  ? "/api4/fbx/Monica_StandingChat.fbx":"/api4/fbx/Monica_Standing%20Greeting.fbx"
   )
  }

  return <div ref={containerRef} />;
};

export default Help;
