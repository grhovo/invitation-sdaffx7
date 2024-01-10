import { Stepper, Step, StepLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StyledTypography from '@containers/common/StyledTypography';

import { steps } from './data';
import { StyledLine, StyledLink, StyledPlaceIcon } from './styled';

const MyStepper = () => {
  return (
    <Stack maxWidth="500px" p="0 20px" mb="40px">
      <Typography variant="h5" textTransform="uppercase" mb="20px" textAlign="center">Plans For The Day</Typography>
      <Stepper activeStep={2} orientation="vertical" connector={<StyledLine />}>
        {steps.map(({ icon, text, time, path, place }) => (
          <Step key={text} sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
            <StepLabel StepIconComponent={icon}>
              <Stack width="100%" gap="6px">
                <StyledTypography variant="h9">{time}</StyledTypography>
                <Typography variant="h9">{text}</Typography>
                <Stack direction="row" gap="6px" alignItems="center">
                  <StyledPlaceIcon />
                  <StyledTypography variant="body3">{place}</StyledTypography>
                </Stack>
                { path && (<StyledLink variant="body3" href={path} target="_blank">See On Map</StyledLink>)}
              </Stack>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
};

export default MyStepper;
