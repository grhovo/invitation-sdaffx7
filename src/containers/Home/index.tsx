import { memo } from 'react';

import Stack from '@mui/material/Stack';

import MyStepper from './Stepper';
// import Timer from './Timer';
import Banner from './Banner';
import InviteText from './InviteText';
// import PenguinsImg from './PenguinsImg';
import { StyledContainer } from './styled';
import TimerSection from './TimerSection';
import DateSection from './DateSection';
import WaitingSection from './WaitingSection';

const Home = () => (
  <StyledContainer>
    <Stack justifyContent="center" alignItems="center" zIndex="1000">
      <Banner />
      <Stack alignItems="center" sx={{ maxWidth: '100%' }}>
        <InviteText />
        <DateSection />
        <MyStepper />
        <WaitingSection />
        <Stack p="80px" />
        <TimerSection />

        {/* <PenguinsImg /> */}
      </Stack>
    </Stack>
  </StyledContainer>
);

export default memo(Home);
