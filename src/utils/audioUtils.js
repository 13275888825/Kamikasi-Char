const unlockAudioContext = audioContext => {
  if (audioContext.state === 'suspended') {
    const unlock = function () {
      audioContext.resume().then(function () {
        document.body.removeEventListener('touchstart', unlock);
        document.body.removeEventListener('touchend', unlock);
      });
    };
    document.body.addEventListener('touchstart', unlock, false);
    document.body.addEventListener('touchend', unlock, false);
  }
};

const playAudio = (
  audioContextRef,
  audioPlayer,
  bufferSource,
  initialize,
  setInitialize
) => {
  if (initialize) {
    unlockAudioContext(audioContextRef.current);
    setInitialize(false);
  }

  return new Promise(resolve => {
    audioPlayer.current.muted = true;
    bufferSource.onended = resolve;
    bufferSource.start();
    audioPlayer.current
      .play()
      .then(() => {
        audioPlayer.current.muted = false;
      })
      .catch(error => {
        console.error('播放音频时出错:', error);
        if (error.name === 'NotSupportedError') {
          alert(
            `播放失败因为: ${error}. 请检查 https://elevenlabs.io/subscription 是否还有足够的字符。`
          );
        } else {
          alert(`播放失败因为: ${error}`);
        }
      });
  });
};

export const playAudios = async (
  audioContextRef,
  audioPlayer,
  audioQueue,
  setIsPlaying,
  playAudioFromNode,
  audioSourceNodeRef,
  initialize,
  setInitialize
) => {
  if (audioQueue.current.length === 0) {
    console.log('队列已经为空');
    setIsPlaying(false);
    return; // 结束函数，避免进入空循环
  }

  while (audioQueue.current.length > 0) {
    console.log('大于0');
    try {
      const audioBuffer = await audioContextRef.current.decodeAudioData(
        audioQueue.current[0]
      );
      const bs = audioContextRef.current.createBufferSource();
      bs.buffer = audioBuffer;
      bs.connect(audioSourceNodeRef.current);
      playAudioFromNode(bs, audioContextRef.current, true);

      await playAudio(
        audioContextRef,
        audioPlayer,
        bs,
        initialize,
        setInitialize
      );
    } catch (decodeError) {
      console.error('解码音频数据时出错:', decodeError);
      // 可以选择中止播放或者执行其他处理
      audioQueue.current.shift(); // 移除当前的无效音频数据
      continue; // 跳过当前循环，继续下一个音频数据
    }

    audioQueue.current.shift();
  }
};
