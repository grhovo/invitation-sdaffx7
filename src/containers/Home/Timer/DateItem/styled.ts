import { styled } from '@mui/material/styles';
import StyledTypography from '@containers/common/StyledTypography';

export const StyledText = styled(StyledTypography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '19px',
  },
}));
