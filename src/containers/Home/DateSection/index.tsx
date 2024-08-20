import { memo } from 'react';

import img from '@assets/images/IMG_9643.jpeg';

import {
  StyledContainer, StyledImage,
  StyledTextContainer, StyledImgContainer,
} from './styled';
import DateAnimation from './DateAnimation';

const Banner = () => {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <StyledImage src={img} alt="" />
      </StyledImgContainer>
      <StyledTextContainer>
        <DateAnimation />
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default memo(Banner);
