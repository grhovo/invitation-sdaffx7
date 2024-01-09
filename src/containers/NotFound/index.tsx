import { memo } from 'react';

import PAGE_ROUTES from '@routes/routingEnum';
import StyledTypography from '@containers/common/StyledTypography';
import { Stack } from '@mui/material';
import pingvinashen from '@assets/images/pingvinashen.png';

import { StyledContainer, StyledLink, StyledTextStack } from './styled';

const NotFound = () => {
  return (
    <StyledContainer>
      <Stack sx={{ position: 'relative' }}>
        <Stack position="absolute">
          <img src={pingvinashen} alt="" />
        </Stack>
        <StyledTextStack>
          <StyledTypography variant="h9">Ոտքերով խաչեր ենք արում, գնում ենք</StyledTypography>
          <StyledLink href={PAGE_ROUTES.HOME} display="block">Home Page</StyledLink>
        </StyledTextStack>
      </Stack>
    </StyledContainer>
  );
};

export default memo(NotFound);
