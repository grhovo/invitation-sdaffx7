import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export const StyledIconBox = styled(Stack)(({ theme }) => ({
  width: 120,
  height: 120,
  background: theme.palette.primary.dark,
  boxShadow: '0px 0px 30px 0 rgb(42 67 113 / 15%)',
  borderRadius: '50%',
  [theme.breakpoints.down('xs')]: {
    width: 100,
    height: 100,
  },
}));

export const StyledImage = styled('img')(({ theme }) => ({
  width: 90,
  height: 90,
  borderRadius: '50%',
  marginLeft: '16px',
  marginTop: '6px',
  [theme.breakpoints.down('xs')]: {
    width: 70,
    height: 70,
  },
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

export const StyledLine = styled(Link)(({ theme }) => ({
  height: '100px',
  width: '1px',
  background: theme.palette.primary.dark,
}));

export const StyledPlaceIcon = styled(PlaceOutlinedIcon)(() => ({
  fontSize: '14px',
}));
