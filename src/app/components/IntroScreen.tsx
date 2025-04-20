// IntroScreen.jsx (전체 페이지)
'use client';

import ChillGuy from './ChillGuy';
import useSound from 'use-sound';
import { useEffect, useState } from 'react';

export default function IntroScreen() {
  const [started, setStarted] = useState(false);
  const [play, { sound }] = useSound('/sounds/chill-bgm.mp3', {
    volume: 0.5,
  });

  const startHandler = () => {
    setStarted(true);
    //play()
  };

  return (
    <div
      className={`absolute z-60 w-full h-full ${started ? '' : 'bg-white'}`}
      onClick={startHandler}>
      <ChillGuy
        started={started}
      />
    </div>
  );
}
