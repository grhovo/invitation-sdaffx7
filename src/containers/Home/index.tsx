import { memo } from 'react';

import Stack from '@mui/material/Stack';

import MyStepper from './Stepper';
import Timer from './Timer';
import Banner from './Banner';
import InviteText from './InviteText';
import PenguinsImg from './PenguinsImg';
import { StyledContainer } from './styled';

const Home = () => {
  return (
    <StyledContainer>
      <Stack justifyContent="center" alignItems="center" zIndex="1000">
        <Banner />
        <Stack alignItems="center">
          <InviteText />
          <PenguinsImg />
          <Timer />
          <MyStepper />
        </Stack>
      </Stack>
    </StyledContainer>
  );
};

export default memo(Home);
