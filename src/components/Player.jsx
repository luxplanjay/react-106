/**
 * Необхідно прибрати атрибут controls та за допомогою Audio API
 * зробити кастомні контроли (play, pause, currentTime, timeupdate).
 */

import { useRef } from "react";

export default function Player() {
  const playerRef = useRef();

  const play = () => {
    playerRef.current.play();
    console.log(playerRef.current.currentTime);
  };

  const pause = () => {
    playerRef.current.pause();
  };

  const stop = () => {
    playerRef.current.pause();
    playerRef.current.currentTime = 0;
  };

  return (
    <div>
      <audio
        ref={playerRef}
        type="audio/mp3"
        src="https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
        // controls
      ></audio>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
