import { memo } from 'react';

import videoSrc from '@assets/videos/banner.mp4';
import { Stack, Typography } from '@mui/material';

import {
  StyledContainer, StyledDateTypography,
  StyledTextContainer, StyledTitle, StyledVideo, StyledVideoContainer,
} from './styled';

const Banner = () => {
  return (
    <StyledContainer>
      <StyledVideoContainer>
        <StyledVideo autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
      </StyledVideoContainer>
      <StyledTextContainer>
        <Stack gap="0px">
          <StyledTitle>Թոռնիկ Անուշ</StyledTitle>
          {/* <StyledTitle sx={{ paddingLeft: '130px' }}>Անուշ</StyledTitle> */}
        </Stack>
        <Typography
          sx={{
            // fontFamily: 'serif !important',
            fontSize: '20px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Հարսանյաց հրավեր
        </Typography>
      </StyledTextContainer>
      <StyledDateTypography>
        Սեպտեմբեր 2, 2024
      </StyledDateTypography>
    </StyledContainer>
  );
};

export default memo(Banner);
