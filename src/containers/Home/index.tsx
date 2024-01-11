import React, { memo, useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import NotFound from '@containers/NotFound';
import { useParams } from 'react-router-dom';
import background from '@assets/images/background.png';
import canva from '@assets/images/canva.png';

import MyStepper from './Stepper';
import Timer from './Timer';
import Banner from './Banner';
import InviteText from './InviteText';
import { guestList } from './InviteText/guestList';
import PenguinsImg from './PenguinsImg';
import { StyledContainer } from './styled';
import { loadImage } from './helpers';

const Home = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      background,
      canva,
    ];

    const loadImages = async () => {
      try {
        await Promise.all(imageUrls.map(loadImage));
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    };

    loadImages();
  }, []);

  if (!imagesLoaded) {
    return null;
  }

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
