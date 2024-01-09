import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

export const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: '320px',
  padding: '40px 32px 80px',
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  [theme.breakpoints.down('sm')]: {
    margin: 0,
    transform: 'scale(0.8)',
    marginLeft: '-65px',
  },
}));

export const StyledTextStack = styled(Box)(() => ({
  position: 'absolute',
  top: '33%',
  right: 'calc(-100% + 145px)',
  width: '180px',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textDecorationColor: theme.palette.primary.dark,
  fontSize: '14px',
  fontWeight: 700,
}));
