import { useTimer } from 'react-timer-hook';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import { StyledDivider } from './styled';
import DateItem from './DateItem';

const Timer = () => {
  const now = new Date();
  const expiryTimestamp = new Date(now.getFullYear(), 0, 24, 13, 30, 0);

  const {
    days,
    hours,
    minutes,
    seconds,
  } = useTimer({ expiryTimestamp });

  return (
    <Stack py="40px">
      <Typography>Հարսանիքին մնաց </Typography>
      <Stack direction="row">
        <DateItem date={days} text="Օր" />
        <StyledDivider />
        <DateItem date={hours} text="Ժամ" />
        <StyledDivider />
        <DateItem date={minutes} text="Րոպե" />
        <StyledDivider />
        <DateItem date={seconds} text="Վայրկյան" />
      </Stack>
    </Stack>
  );
};

export default Timer;
