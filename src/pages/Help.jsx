import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/addons/loaders/FBXLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import './ThreeFbxViewer.css';

const ThreeFbxViewer = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer();
  const loader = new FBXLoader();
  const fbxRef = useRef();

  useEffect(() => {
    // 设置相机位置
    camera.position.z = 25;

    // 设置渲染器大小并将其添加到 DOM 中
    renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8);
    const container = document.querySelector('.three-container');
    container.appendChild(renderer.domElement);

    // 加载 FBX 模型
    loader.load('api4/fbx/Mon_Catwalk_2Web.fbx', fbx => {
      fbxRef.current = fbx;
      fbx.scale.set(0.1, 0.1, 0.1);

      // 使模型垂直水平居中
      centerModel();

      scene.add(fbx);
    });

    // 添加灯光
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // 添加鼠标控制
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.screenSpacePanning = false;
    controls.maxPolarAngle = Math.PI / 2;
    // controls.enablePan = true;

    // 渲染循环
    const animate = () => {
      requestAnimationFrame(animate);

      // 对模型进行动画或其他更新
      if (fbxRef.current) {
        // 在这里添加模型的动画或更新逻辑
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // 在组件卸载时清理资源
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  // 使模型垂直水平居中的函数
  const centerModel = () => {
    const boundingBox = new THREE.Box3().setFromObject(fbxRef.current);
    const center = new THREE.Vector3();
    boundingBox.getCenter(center);

    // 将模型水平和垂直居中
    console.log(-center.x, -center.y + boundingBox.max.y / 2);
    fbxRef.current.position.x = -center.x;
    fbxRef.current.position.y = -10;
  };

  return (
    <div className='three-container'>
      {/* 你可以在这里添加一些 UI 元素，比如按钮、文本等 */}
    </div>
  );
};

export default ThreeFbxViewer;
