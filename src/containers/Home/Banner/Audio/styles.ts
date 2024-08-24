import { Button, Stack } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

// Styled components
export const StyledContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100dvh',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

export const StyledAudio = styled('audio')(() => ({
  width: '100%',
  marginTop: '20px',
}));

export const StyledButton = styled(Button)(() => ({
  marginTop: '20px',
}));

const swingAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '25%': {
    transform: 'rotate(5deg)',
  },
  '50%': {
    transform: 'rotate(0deg)',
  },
  '75%': {
    transform: 'rotate(-5deg)',
  },
  '100%': {
    transform: 'rotate(0deg)',
  },
});

export const MusicIcon = styled(MusicNoteIcon)(() => ({
  fontSize: '48px',
  color: 'grey',
  //   animation: `${waveAnimation} 1s infinite`,
  '&.wave': {
    animation: `${swingAnimation} 1.5s ease-in-out infinite`,
  },
}));
