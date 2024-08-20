import { useInView } from 'react-intersection-observer';
import { Box } from '@mui/material';

import { StyledAnimationBox, StyledDay, StyledMonth, StyledYear } from './styled';

const AnimatedText = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box>
      <Box>
        <StyledAnimationBox
          ref={ref}
          inView={inView}
        >
          <Box sx={{ position: 'relative' }}>
            <StyledDay>
              02
            </StyledDay>
            <StyledMonth>
              09
            </StyledMonth>
            <StyledYear>
              24
            </StyledYear>
          </Box>
        </StyledAnimationBox>
      </Box>
    </Box>
  );
};

export default AnimatedText;
