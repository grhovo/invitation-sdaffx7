import { useTimer } from 'react-timer-hook';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import DateItem from './DateItem';

const Timer = () => {
  const expiryTimestamp = new Date(2024, 8, 2, 14, 0, 0); // September 2, 2024, at 14:00 (2:00 PM)

  const {
    days,
    hours,
    minutes,
    seconds,
  } = useTimer({ expiryTimestamp });

  return (
    <Stack py="40px" sx={{ alignItems: 'center', gap: '10px' }}>
      <Typography
        sx={{ color: 'white', textAlign: 'center', fontWeight: 100, fontFamily: 'Cormorant Garamond, serif',
        }}
      >
        Հարսանիքին մնացել է
      </Typography>
      <Stack direction="row">
        <DateItem date={days} text="Օր" />
        <DateItem date={hours} text="Ժամ" />
        <DateItem date={minutes} text="Րոպե" />
        <DateItem date={seconds} text="Վայրկյան" />
      </Stack>
    </Stack>
  );
};

export default Timer;
