import { memo } from 'react';

import videoSrc from '@assets/videos/banner.mp4';

import {
  StyledContainer, StyledDateTypography,
  StyledTextContainer, StyledTitle, StyledTypography, StyledVideo, StyledVideoContainer,
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
        <StyledTitle className="uppercase">ԹՈՌՆԻԿ ԱՆՈՒՇ</StyledTitle>
        <StyledTypography>
          Հարսանյաց հրավեր
        </StyledTypography>
      </StyledTextContainer>
      <StyledDateTypography>
        Սեպտեմբեր 2, 2024
      </StyledDateTypography>
    </StyledContainer>
  );
};

export default memo(Banner);
