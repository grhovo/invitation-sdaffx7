import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledDate = styled(Typography)(() => ({
  color: 'white',
  fontFamily: 'Cinzel Decorative',
  fontSize: '24px',
  fontWeight: 100,
}));

export const StyledText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontFamily: 'Cormorant Garamond, serif',
  [theme.breakpoints.down('xs')]: {
    fontSize: '12px',
    fontWeight: 100,
  },
}));
