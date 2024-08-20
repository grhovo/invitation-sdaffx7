import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const StyledContainer = styled(Stack)(() => ({
  height: '100vh',
  width: '100%',
  zIndex: '1',
  overflowX: 'hidden',
}));
