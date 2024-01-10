import { memo } from 'react';

import StyledTypography from '@containers/common/StyledTypography';
import { Stack } from '@mui/material';
import pingvinashen from '@assets/images/pingvinashen.png';

import { StyledContainer, StyledTextStack } from './styled';

const NotFound = () => {
  return (
    <StyledContainer>
      <Stack sx={{ position: 'relative' }}>
        <Stack position="absolute">
          <img src={pingvinashen} alt="" />
        </Stack>
        <StyledTextStack>
          <StyledTypography variant="h9">Ոտքերով խաչեր ենք անում, գնում ենք</StyledTypography>
        </StyledTextStack>
      </Stack>
    </StyledContainer>
  );
};

export default memo(NotFound);
