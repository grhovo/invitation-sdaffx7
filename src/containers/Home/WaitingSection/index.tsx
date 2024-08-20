import { memo } from 'react';

import img from '@assets/images/IMG_9654.jpeg';

import {
  StyledContainer, StyledImage,
  StyledTextContainer, StyledVideoContainer,
} from './styled';
import WaitingAnimation from './WaitingAnimation';

const Banner = () => {
  return (
    <StyledContainer>
      <StyledVideoContainer>
        <StyledImage src={img} alt="" />
      </StyledVideoContainer>
      <StyledTextContainer>
        <WaitingAnimation />
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default memo(Banner);
