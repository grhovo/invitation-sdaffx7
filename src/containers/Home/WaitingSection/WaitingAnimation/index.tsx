import { useInView } from 'react-intersection-observer';
import { Box, Typography } from '@mui/material';
import StyledTypography from '@containers/common/StyledTypography';

const textLines = ['ՍԻՐՈՎ', 'ԿՍՊԱՍԵՆՔ', 'ՁԵԶ'];

const AnimatedText = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Box ref={ref} sx={{ textAlign: 'center', width: '100%' }}>
      {textLines.map((line) => (
        <Typography variant="h4" component="div" key={line}>
          {line.split('').map((char, index) => (
            <StyledTypography
              key={char}
              sx={{
                fontSize: '24px',
                color: 'white',
                display: 'inline-block',
                transform: inView ? 'translateY(0)' : 'translateY(100%)',
                opacity: inView ? 1 : 0,
                transition: `transform 0.6s ease ${index * 0.2}s, opacity 0.6s ease ${index * 0.2}s`,
              }}
            >
              {char}
            </StyledTypography>
          ))}
        </Typography>
      ))}
    </Box>
  );
};

export default AnimatedText;
