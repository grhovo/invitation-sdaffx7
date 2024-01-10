import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { gettingColor } from './helpers';

interface StyledMuiTypographyProps{
  color?: string;
  underLine?: boolean;
  isItalic?: boolean;
}

export const StyledMuiTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'underLine' && prop !== 'isItalic',
})<StyledMuiTypographyProps>(({ theme, color = 'black', underLine = false, isItalic }) => ({
  color: gettingColor(color, theme),
  textDecoration: underLine ? 'underline' : 'none',
  fontFamily: isItalic ? 'Marck Script, cursive' : '',
}));
