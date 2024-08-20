import { memo } from 'react';

import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

const InviteText = () => {
  return (
    <Stack p="40px 20px" maxWidth="540px">
      <Typography sx={{}} variant="body2" textAlign="center">
        Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր կյանքի կարևորագույն  իրադարձությանը:
      </Typography>
    </Stack>
  );
};

export default memo(InviteText);
