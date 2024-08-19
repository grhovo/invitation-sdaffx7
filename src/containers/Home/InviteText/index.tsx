import { memo } from 'react';

import Stack from '@mui/material/Stack';
import StyledTypography from '@containers/common/StyledTypography';

const InviteText = () => {
  return (
    <Stack p="40px 20px" maxWidth="540px">
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        Սիրով հրավիրում ենք Ձեզ ներկա գտնվելու մեր կյանքի կարևորագույն  իրադարձությանը:
      </StyledTypography>
    </Stack>
  );
};

export default memo(InviteText);
