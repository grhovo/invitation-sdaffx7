import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export const StyledContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '700px',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '100vh',
  },
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'top center',
  top: 0,
  // [theme.breakpoints.down('md')]: {
  //   height: '500px',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   height: '400px',
  // },
}));

export const StyledVideoContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '700px',
  top: 0,
  [theme.breakpoints.down('md')]: {
    height: '100vh',
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
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '200px',
  // [theme.breakpoints.down('md')]: {
  //   height: '500px',
  // },
  // [theme.breakpoints.down('sm')]: {
  //   width: '100%',
  //   height: '400px',
  // },
}));

export const StyledTitle = styled(Typography)(() => ({
  fontSize: '48px',
  color: 'white',
  textAlign: 'center',
  marginBottom: '40px',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: '36px',
  color: 'white',
  textAlign: 'center',
}));

export const StyledDateTypography = styled(Typography)(() => ({
  zIndex: 10,
  position: 'absolute',
  bottom: 0,
  fontSize: '24px',
  color: 'white',
  left: '10px',
  paddingBottom: '10px',
}));
