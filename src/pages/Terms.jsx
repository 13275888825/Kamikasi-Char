/*
 * @Author: wqh wqh20010307@163.com
 * @Date: 2023-11-17 15:34:04
 * @LastEditors: wqh wqh20010307@163.com
 * @LastEditTime: 2023-12-13 18:24:48
 * @FilePath: \Kamikasi-Char\src\pages\Terms.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// ...（其他导入）

const Help = () => {
  // ...（其他变量）

  const [mixer, setMixer] = useState(null);
  const [fixedModel, setFixedModel] = useState(null);

  useEffect(() => {
    // 处理先前的场景
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }

    // ...（你的代码的其余部分）

    const fixedModelLoader = new FBXLoader();

    // 加载固定的模型
    fixedModelLoader.load('/api4/fbx/Monica_ChatLaugh.fbx', (fbx) => {
      const fixedMixer = new THREE.AnimationMixer(fbx);
      fbx.animations[0] = object.animations[0];
      const fixedAction = fixedMixer.clipAction(fbx.animations[0]);
      fixedAction.play();

      fbx.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      setFixedModel(fbx);
    });

    // ...（你的代码的其余部分）

    return () => {
      // 处理渲染器、控制器等
      renderer.dispose();
      controls.dispose();

      // ...（你的清理代码的其余部分）
    };
  }, []); // 空依赖数组，只加载一次

  // ...（你的代码的其余部分）

  useEffect(() => {
    // 处理动态的 URL 加载
    const dynamicModelLoader = new FBXLoader();

    dynamicModelLoader.load(getStatus(status), (object) => {
      console.log(object, 'obj');
      setTracks(object.animations[0].tracks);

      if (mixer) {
        mixer.stopAllAction();
        mixer.uncacheRoot(object);
        mixer.clipAction(object.animations[0]).play();
      } else {
        setMixer(new THREE.AnimationMixer(object));
      }

      scene.add(object);
    });

    // ...（你的代码的其余部分）

    return () => {
      // 处理动态的 URL 加载时的清理逻辑
    };
  }, [status, mixer, scene]);

  // ...（你的代码的其余部分）

  return <div ref={containerRef} />;
};

export default Help;