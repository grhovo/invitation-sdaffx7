import { memo } from 'react';

import img from '@assets/images/IMG_9641.jpeg';

import {
  StyledContainer, StyledImage,
  StyledTextContainer, StyledImgContainer,
} from './styled';
import Timer from '../Timer';

const Banner = () => {
  return (
    <StyledContainer>
      <StyledImgContainer>
        <StyledImage src={img} alt="" />
      </StyledImgContainer>
      <StyledTextContainer>
        <Timer />
      </StyledTextContainer>
    </StyledContainer>
  );
};

export default memo(Banner);
