import { Stepper, Step, StepLabel } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import StyledTypography from '@containers/common/StyledTypography';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

import { steps } from './data';
import { StyledLine, StyledLink } from './styled';

const MyStepper = () => {
  return (
    <Stack maxWidth="500px" p="0 20px">
      <Stepper activeStep={2} orientation="vertical" connector={<StyledLine />}>
        {steps.map(({ icon, text, time, path, place }) => (
          <Step key={text} sx={{ width: '100%', display: 'flex', alignItems: 'flex-start' }}>
            <StepLabel StepIconComponent={icon}>
              <Stack width="100%">
                <StyledTypography variant="h8">{time}</StyledTypography>
                <Typography variant="h9">{text}</Typography>
                <Stack direction="row" gap="6px">
                  <PlaceOutlinedIcon />
                  <StyledTypography variant="subtitle3">{place}</StyledTypography>
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
