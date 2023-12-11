/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
// 导入所需库和组件
import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, useTexture, Loader, Environment, useFBX, useAnimations, OrthographicCamera } from '@react-three/drei';
import { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial';
import { LinearEncoding, sRGBEncoding } from 'three/src/constants';
import { LineBasicMaterial, MeshPhysicalMaterial, Vector2 } from 'three';
import ReactAudioPlayer from 'react-audio-player';
import createAnimation from './converter';  // 从 'converter' 模块导入函数
import blinkData from './blendDataBlink.json';  // 导入 JSON 数据

import * as THREE from 'three';  // 导入整个 Three.js 库
import axios from 'axios';  // 导入 Axios 用于进行 HTTP 请求
const _ = require('lodash');  // 导入带有变量 '_' 的 lodash 库

const host = 'http://localhost:5000';  // 定义 HTTP 请求的基本 URL

// React 函数组件，用于3D头像
function Avatar({ avatar_url, speak, setSpeak, text, setAudioSource, playing }) {

    // 加载3D模型并设置形变目标字典
    let gltf = useGLTF(avatar_url);
    let morphTargetDictionaryBody = null;
    let morphTargetDictionaryLowerTeeth = null;

    // 加载不同部分的纹理
    const [
        bodyTexture,
        eyesTexture,
        teethTexture,
        bodySpecularTexture,
        bodyRoughnessTexture,
        bodyNormalTexture,
        teethNormalTexture,
        hairTexture,
        tshirtDiffuseTexture,
        tshirtNormalTexture,
        tshirtRoughnessTexture,
        hairAlphaTexture,
        hairNormalTexture,
        hairRoughnessTexture,
    ] = useTexture([
        "/api4/images/body.webp",
        "/api4/images/eyes.webp",
        "/api4/images/teeth_diffuse.webp",
        "/api4/images/body_specular.webp",
        "/api4/images/body_roughness.webp",
        "/api4/images/body_normal.webp",
        "/api4/images/teeth_normal.webp",
        "/api4/images/h_color.webp",
        "/api4/images/tshirt_diffuse.webp",
        "/api4/images/tshirt_normal.webp",
        "/api4/images/tshirt_roughness.webp",
        "/api4/images/h_alpha.webp",
        "/api4/images/h_normal.webp",
        "/api4/images/h_roughness.webp",
    ]);

    // 配置纹理设置
    _.each([
        bodyTexture,
        eyesTexture,
        teethTexture,
        teethNormalTexture,
        bodySpecularTexture,
        bodyRoughnessTexture,
        bodyNormalTexture,
        tshirtDiffuseTexture,
        tshirtNormalTexture,
        tshirtRoughnessTexture,
        hairAlphaTexture,
        hairNormalTexture,
        hairRoughnessTexture
    ], t => {
        t.encoding = sRGBEncoding;
        t.flipY = false;
    });

    bodyNormalTexture.encoding = LinearEncoding;
    tshirtNormalTexture.encoding = LinearEncoding;
    teethNormalTexture.encoding = LinearEncoding;
    hairNormalTexture.encoding = LinearEncoding;

    // 遍历3D模型节点并对每个部分应用特定设置
    gltf.scene.traverse(node => {

        if (node.type === 'Mesh' || node.type === 'LineSegments' || node.type === 'SkinnedMesh') {

            node.castShadow = true;
            node.receiveShadow = true;
            node.frustumCulled = false;

            // 身体部分设置
            if (node.name.includes("Body")) {
                node.castShadow = true;
                node.receiveShadow = true;

                node.material = new MeshPhysicalMaterial();
                node.material.map = bodyTexture;
                node.material.roughness = 1.7;
                node.material.roughnessMap = bodyRoughnessTexture;
                node.material.normalMap = bodyNormalTexture;
                node.material.normalScale = new Vector2(0.6, 0.6);

                morphTargetDictionaryBody = node.morphTargetDictionary;

                node.material.envMapIntensity = 0.8;
            }

            // 眼睛设置
            if (node.name.includes("Eyes")) {
                node.material = new MeshStandardMaterial();
                node.material.map = eyesTexture;
                node.material.roughness = 0.1;
                node.material.envMapIntensity = 0.5;
            }

            // 眉毛设置
            if (node.name.includes("Brows")) {
                node.material = new LineBasicMaterial({ color: 0x000000 });
                node.material.linewidth = 1;
                node.material.opacity = 0.5;
                node.material.transparent = true;
                node.visible = false;
            }

            // 牙齿设置
            if (node.name.includes("Teeth")) {
                node.receiveShadow = true;
                node.castShadow = true;
                node.material = new MeshStandardMaterial();
                node.material.roughness = 0.1;
                node.material.map = teethTexture;
                node.material.normalMap = teethNormalTexture;
                node.material.envMapIntensity = 0.7;
            }

            // 头发设置
            if (node.name.includes("Hair")) {
                node.material = new MeshStandardMaterial();
                node.material.map = hairTexture;
                node.material.alphaMap = hairAlphaTexture;
                node.material.normalMap = hairNormalTexture;
                node.material.roughnessMap = hairRoughnessTexture;
                node.material.transparent = true;
                node.material.depthWrite = false;
                node.material.side = 2;
                node.material.color.setHex(0x000000);
                node.material.envMapIntensity = 0.3;
            }

            // T恤设置
            if (node.name.includes("TSHIRT")) {
                node.material = new MeshStandardMaterial();
                node.material.map = tshirtDiffuseTexture;
                node.material.roughnessMap = tshirtRoughnessTexture;
                node.material.normalMap = tshirtNormalTexture;
                node.material.color.setHex(0xffffff);
                node.material.envMapIntensity = 0.5;
            }

            // 下牙齿设置
            if (node.name.includes("TeethLower")) {
                morphTargetDictionaryLowerTeeth = node.morphTargetDictionary;
            }

        }

    });

    // 状态管理用于动画剪辑和混合器
    const [clips, setClips] = useState([]);
    const mixer = useMemo(() => new THREE.AnimationMixer(gltf.scene), []);

    // 用于处理语音生成的 useEffect
    useEffect(() => {
        if (speak === false)
            return;

        makeSpeech(text)
            .then(response => {
                let { blendData, filename } = response.data;
                let newClips = [
                    createAnimation(blendData, morphTargetDictionaryBody, 'HG_Body'),
                    createAnimation(blendData, morphTargetDictionaryLowerTeeth, 'HG_TeethLower')];
                filename = host + filename;
                setClips(newClips);
                setAudioSource(filename);
            })
            .catch(err => {
                console.error(err);
                setSpeak(false);
            });
    }, [speak]);

    // 加载并修改空闲状态的 FBX 动画
    let idleFbx = useFBX('/api4/fbx/idle.fbx');
    let { clips: idleClips } = useAnimations(idleFbx.animations);

    idleClips[0].tracks = _.filter(idleClips[0].tracks, track => {
        return track.name.includes("Head") || track.name.includes("Neck") || track.name.includes("Spine2");
    });

    idleClips[0].tracks = _.map(idleClips[0].tracks, track => {

        if (track.name.includes("Head")) {
            track.name = "head.quaternion";
        }

        if (track.name.includes("Neck")) {
            track.name = "neck.quaternion";
        }

        if (track.name.includes("Spine")) {
            track.name = "spine2.quaternion";
        }

        return track;
    });

    // 加载并播放空闲和眨眼动画
    useEffect(() => {
        let idleClipAction = mixer.clipAction(idleClips[0]);
        idleClipAction.play();
        let blinkClip = createAnimation(blinkData, morphTargetDictionaryBody, 'HG_Body');
        let blinkAction = mixer.clipAction(blinkClip);
        blinkAction.play();
    }, []);

    // 当播放状态为 true 时播放动画剪辑
    useEffect(() => {
        if (playing === false)
            return;

        _.each(clips, clip => {
            let clipAction = mixer.clipAction(clip);
            clipAction.setLoop(THREE.LoopOnce);
            clipAction.play();
        });
    }, [playing]);

    // 在每一帧更新混合器
    useFrame((state, delta) => {
        mixer.update(delta);
    });

    // 返回3D头像组
    return (
        <group name="avatar">
            <primitive object={gltf.scene} dispose={null} />
        </group>
    );
}

// 处理语音生成的 HTTP 请求
function makeSpeech(text) {
    return axios.post(host + '/talk', { text });
}

// UI 元素样式
const STYLES = {
    area: { position: 'absolute', bottom: '10px', left: '10px', zIndex: 500 },
    text: { margin: '0px', width: '300px', padding: '5px', background: 'none', color: '#ffffff', fontSize: '1.2em', border: 'none' },
    speak: { padding: '10px', marginTop: '5px', display: 'block', color: '#FFFFFF', background: '#222222', border: 'None' },
    area2: { position: 'absolute', top: '5px', right: '15px', zIndex: 500 },
    label: { color: '#777777', fontSize: '0.8em' }
}

// 主 React 函数组件，应用的入口
function App() {
    const audioPlayer = useRef();  // 音频播放器引用

    // 语音、文本、音频源和播放状态的状态管理
    const [speak, setSpeak] = useState(false);
    const [text, setText] = useState("My name is Arwen. I'm a virtual human who can speak whatever you type here along with realistic facial movements.");
    const [audioSource, setAudioSource] = useState(null);
    const [playing, setPlaying] = useState(false);

    // 音频播放结束事件处理
    function playerEnded(e) {
        setAudioSource(null);
        setSpeak(false);
        setPlaying(false);
    }

    // 音频就绪事件处理
    function playerReady(e) {
        audioPlayer.current.audioEl.current.play();
        setPlaying(true);
    }

    // 返回主 UI 结构
    return (
        <div className="full">
            <div style={STYLES.area}>
                <textarea rows={4} type="text" style={STYLES.text} value={text} onChange={(e) => setText(e.target.value.substring(0, 200))} />
                <button onClick={() => setSpeak(true)} style={STYLES.speak}> {speak ? 'Running...' : 'Speak'}</button>
            </div>

            {/* 音频播放器组件 */}
            <ReactAudioPlayer
                src={audioSource}
                ref={audioPlayer}
                onEnded={playerEnded}
                onCanPlayThrough={playerReady}
            />

            {/* 用于3D头像的画布 */}
            <Canvas dpr={2} onCreated={(ctx) => {
                ctx.gl.physicallyCorrectLights = true;
            }}>
                {/* 正交相机设置 */}
                <OrthographicCamera
                    makeDefault
                    zoom={2000}
                    position={[0, 1.65, 1]}
                />

                {/* 背景环境 */}
                <Suspense fallback={null}>
                    <Environment background={false} files="/api4/images/photo_studio_loft_hall_1k.hdr" />
                </Suspense>

                {/* 背景网格 */}
                <Suspense fallback={null}>
                    <Bg />
                </Suspense>

                {/* 头像组件 */}
                <Suspense fallback={null}>
                    <Avatar
                        avatar_url="/api4/glb/model.glb"
                        speak={speak}
                        setSpeak={setSpeak}
                        text={text}
                        setAudioSource={setAudioSource}
                        playing={playing}
                    />
                </Suspense>
            </Canvas>

            {/* 加载指示器 */}
            <Loader dataInterpolation={(p) => `Loading... please wait`} />
        </div>
    );
}

// 背景组件
function Bg() {
    const texture = useTexture('/api4/images/bg.webp');

    return (
        <mesh position={[0, 1.5, -2]} scale={[0.8, 0.8, 0.8]}>
            {/* <planeBufferGeometry /> */}
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}

export default App;  // 导出主 App 组件
