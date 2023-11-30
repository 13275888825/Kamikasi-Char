for (let i = 0; i < video.buffered.length - 1; i++) {
  let prestart = video.buffered.start(i);
  let preend = video.buffered.end(i);
  if (!sourcebuffer.updating) {
    sourcebuffer.remove(prestart, preend);
  }
}
