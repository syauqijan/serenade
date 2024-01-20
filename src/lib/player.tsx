import { RefObject } from 'react';

const Player = (isPlaying: boolean, audioRef: RefObject<HTMLAudioElement>) => {
  if (isPlaying) {
    const playPromise = audioRef.current?.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        audioRef.current?.play();
      });
    }
  }
};

export default Player;