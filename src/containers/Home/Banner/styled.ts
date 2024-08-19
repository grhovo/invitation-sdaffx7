import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

export const StyledContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  height: '500px',
  objectFit: 'contain',
  objectPosition: 'top center',
  top: 0,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 'unset',
  },
}));

export const StyledVideoContainer = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100vh',
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100vh',
  objectFit: 'cover',
  outline: 'none',
}));

export const StyledTextContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100vh',
  position: 'absolute',
  zIndex: 10,
  background: '#1118274d',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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
