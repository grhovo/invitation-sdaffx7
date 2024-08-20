import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const StyledContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '600px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
}));

export const StyledImgContainer = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '600px',
  objectFit: 'cover',
  objectPosition: 'top center',
  top: 0,
  [theme.breakpoints.down('md')]: {
    height: '500px',
  },
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  outline: 'none',
}));

export const StyledTextContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  zIndex: 10,
  background: '#1118274d',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
}));
