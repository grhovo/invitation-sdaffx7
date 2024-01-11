import { memo } from 'react';

import Stack from '@mui/material/Stack';
import NotFound from '@containers/NotFound';
import { useParams } from 'react-router-dom';

import MyStepper from './Stepper';
import Timer from './Timer';
import Banner from './Banner';
import InviteText from './InviteText';
import { guestList } from './InviteText/guestList';
import PenguinsImg from './PenguinsImg';
import { StyledContainer } from './styled';

const Home = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);

  if (!guest) {
    return <NotFound />;
  }

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
