import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import StyledTypography from '@containers/common/StyledTypography';

export const StyledContainer = styled(Stack)(() => ({
  width: '100%',
  height: '100dvh',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}));

export const StyledImage = styled('img')(({ theme }) => ({
  height: '500px',
  objectFit: 'contain',
  objectPosition: 'top center',
  top: 0,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'unset',
  },
}));

export const StyledVideoContainer = styled(Stack)(() => ({
  position: 'absolute',
  width: '100%',
  height: '100dvh',
}));

export const StyledVideo = styled('video')(() => ({
  width: '100%',
  height: '100dvh',
  objectFit: 'cover',
  outline: 'none',
  border: 'none',
}));

export const StyledTextContainer = styled(Stack)(({ theme }) => ({
  width: '100%',
  height: '100dvh',
  position: 'absolute',
  zIndex: 10,
  background: '#1118274d',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '100px',

  [theme.breakpoints.down('sm')]: {
    gap: '32px',
  },
}));

export const StyledTitle = styled(StyledTypography)(({ theme }) => ({
  fontSize: '60px',
  color: 'white',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    fontSize: '26px',
  },
}));

export const StyledBackTitle = styled(StyledTypography)(({ theme }) => ({
  position: 'absolute',
  fontSize: '160px',
  color: 'white',
  textAlign: 'center',
  opacity: '30%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.down('sm')]: {
    fontSize: '85px',
  },
}));
export const StyledDateTypography = styled(Typography)(() => ({
  zIndex: 10,
  position: 'absolute',
  bottom: 0,
  fontSize: '14px',
  color: 'white',
  left: '10px',
  paddingBottom: '30px',
}));
