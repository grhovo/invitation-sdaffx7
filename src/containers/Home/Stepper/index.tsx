import { useInView } from 'react-intersection-observer';
import { Stepper, Step, StepLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StyledTypography from '@containers/common/StyledTypography';

import { steps } from './data';
import { StyledLink } from './styled';

const MyStepper = () => {
  return (
    <Stack maxWidth="500px" p="40px 20px">
      <StyledTypography sx={{ fontSize: '26px' }}>
        ՕՐՎԱ ՕՐԱԳԻՐ
      </StyledTypography>
      <Stepper orientation="vertical" connector={<div />}>
        {steps.map(({ icon, address, time, path, place }) => {
          const { ref, inView } = useInView({
            triggerOnce: false,
            threshold: 0.1,
          });

          return (
            <Step
              key={address}
              sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'color 1s ease-in-out, transform 1s ease-in-out',
              }}
              ref={ref}
            >
              <StepLabel
                StepIconComponent={icon}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}
              >
                <Stack width="100%" gap="2px">
                  <Typography
                    variant="h9"
                    sx={{
                      fontSize: '32px',
                      color: '#c8a663',
                      transition: 'color 1s ease-in-out',
                    }}
                  >
                    {time}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '12px',
                      fontWeight: 600,
                    }}
                  >
                    {place}
                  </Typography>
                  <Typography
                    color="grey"
                    sx={{
                      fontSize: '12px',
                      margin: '5px 0',
                      color: '#788B9A',
                    }}
                  >
                    {`Հասցե՝ ${address} `}
                  </Typography>
                  {path && (
                    <StyledLink variant="body3" href={path} target="_blank">
                      Քարտեզ
                    </StyledLink>
                  )}
                </Stack>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Stack>
  );
};

export default MyStepper;
