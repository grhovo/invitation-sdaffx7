import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { Typography } from '@mui/material';

export const StyledImage = styled('img')(() => ({
  marginTop: '5px',
  display: 'block',
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  width: '80px',
  display: 'flex',
  justifyContent: 'center',
  color: theme.palette.grey[300],
  border: `1px solid ${theme.palette.grey[300]}`,
  padding: '6px 8px',
  borderRadius: '20px',
  textDecoration: 'none',
}));

export const StyledPlaceIcon = styled(PlaceOutlinedIcon)(() => ({
  fontSize: '14px',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontFamily: 'CosiArm',
}));

export const StyledButton = styled('button')(() => ({
  outline: 'none',
  border: '1px solid #c8a663',
}));
