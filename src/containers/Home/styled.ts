import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import background from '@assets/images/background.png';

export const StyledContainer = styled(Stack)(() => ({
  height: '100vh',
  width: '100%',
  position: 'fixed',
  zIndex: '1',
  overflow: 'auto',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
}));
