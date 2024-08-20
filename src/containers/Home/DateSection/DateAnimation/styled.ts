import { styled } from '@mui/material/styles';
import StyledTypography from '@containers/common/StyledTypography';
import { Box } from '@mui/material';

export const StyledText = styled(StyledTypography)(() => ({
  position: 'absolute',
  color: 'white',
  fontFamily: 'CosiArm',
  fontSize: '48px',
}));

export const StyledDay = styled(StyledText)(() => ({
  top: 0,
  left: 0,
  zIndex: 11,
}));

export const StyledMonth = styled(StyledText)(() => ({
  top: '35px',
  left: '30px',
  opacity: '50%',
  zIndex: 10,
}));
export const StyledYear = styled(StyledText)(() => ({
  top: '60px',
  left: '60px',
}));

export const StyledAnimationBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'inView',
})<{inView: any}>(({ inView }) => ({
  marginBottom: '-140px',
  marginLeft: '-140px',
  transform: inView ? 'translateX(0)' : 'translateX(100%)',
  opacity: inView ? 1 : 0,
  transition: 'transform 1s ease-out, opacity 1s ease-out',
}));
