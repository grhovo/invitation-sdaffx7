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

const Home = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageUrls = [
      background,
      canva,
    ];

    async function loadImages() {
      try {
        await Promise.all(imageUrls.map(loadImage));
        setImagesLoaded(true);
        console.log('All images have loaded.');
      } catch (error) {
        console.error('Failed to load images:', error);
      }
    }

    loadImages();
  }, []);

  function loadImage(src:string) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => {
        resolve(image);
      };

      image.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };

      image.src = src;
    });
  }

  if (!imagesLoaded) {
    return <>ggg</>;
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
