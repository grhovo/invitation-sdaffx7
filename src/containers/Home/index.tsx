import { memo } from 'react';

import background from '@assets/images/background1.png';
import Stack from '@mui/material/Stack';
import NotFound from '@containers/NotFound';
import { useParams } from 'react-router-dom';

import MyStepper from './Stepper';
import Timer from './Timer';
import Banner from './Banner';
import InviteText from './InviteText';
import { guestList } from './InviteText/guestList';
import PenguinsImg from './PenguinsImg';

const Home = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);

  if (!guest) {
    return <NotFound />;
  }

  return (
    <Stack
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        zIndex: '1',
        overflow: 'auto',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}
    >
      <Stack justifyContent="center" alignItems="center" zIndex="1000">
        <Banner />
        <Stack alignItems="center">
          <InviteText />
          <PenguinsImg />
          <Timer />
          <MyStepper />
        </Stack>
      </Stack>
    </Stack>

  );
};

export default memo(Home);
