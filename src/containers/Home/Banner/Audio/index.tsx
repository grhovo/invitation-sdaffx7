import React, { useRef, useState, useEffect } from 'react';

import { Stack } from '@mui/material';
import Audio from '@assets/audio/she.mp3';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import { MusicIcon, StyledAudio } from './styles';

const AudioPlayer: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const simulateButtonClick = () => {
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    };

    window.addEventListener('load', simulateButtonClick);

    return () => {
      window.removeEventListener('load', simulateButtonClick);
    };
  }, []);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.error('Error playing audio:', error);
        });
      }
    }
  };

  return (
    <Stack sx={{ position: 'absolute', top: '10px', left: '10px' }}>
      <StyledAudio ref={audioRef} style={{ display: 'none' }} loop>
        <source src={Audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </StyledAudio>
      <Stack
        sx={{ cursor: 'pointer' }}
        onClick={handlePlayPause}
        ref={buttonRef}
      >
        {isPlaying ? (
          <MusicIcon className="wave" />
        ) : (
          <PlayCircleOutlineIcon sx={{ fontSize: '48px', color: 'grey' }} />
        )}
      </Stack>
    </Stack>
  );
};

export default AudioPlayer;
