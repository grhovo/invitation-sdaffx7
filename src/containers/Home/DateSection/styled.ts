import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const StyledContainer = styled(Stack)(({ theme }) => ({
  maxWidth: '992px',
  width: '100%',
  height: '700px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '100dvh',
  },
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top center',
  top: 0,
}));

export const StyledImgContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '700px',
  top: 0,
  [theme.breakpoints.down('md')]: {
    height: '100dvh',
  },
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100dvh',
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
  paddingBottom: '20px',
  alignItems: 'flex-end',
}));
