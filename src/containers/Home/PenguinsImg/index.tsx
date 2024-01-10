// import { Stack } from '@mui/material';
import penguin from '@assets/images/penguin.jpeg';

import { StyledContainer, StyledImage } from '../Banner/styled';

const PenguinsImg = () => {
  return (
    <StyledContainer>
      <StyledImage src={penguin} alt="" />
    </StyledContainer>
  );
};

export default PenguinsImg;
