import { memo } from 'react';

import { useParams } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';

import { guestList } from './guestList';

const InviteText = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);

  return (
    <Stack p="0 20px">
      {`Dear ${guest?.name},`}
      <Typography>
        You are warmly invited to join us in celebrating our wedding ceremony.
      </Typography>
      <Typography>
        We eagerly look forward to seeing you there.
      </Typography>
      <Typography>
        We would prefer for you to be with us for every part of the day.
      </Typography>
      <Typography>
        However, if you can&apos;t  make it for the entire event, please join us as soon as you can
      </Typography>
      <Typography>
        Bring an extremely high mood and your brightest smile with you.
      </Typography>
    </Stack>
  );
};

export default memo(InviteText);
