import { memo } from 'react';

import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import StyledTypography from '@containers/common/StyledTypography';

import { guestList } from './guestList';

const InviteText = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);

  return (
    <Stack p="40px 20px" maxWidth="540px">
      <StyledTypography isItalic variant="h3" textAlign="center">
        {`Dear ${guest?.name},`}
      </StyledTypography>
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        You are warmly invited to join us in celebrating our wedding ceremony.
      </StyledTypography>
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        We look forward to seeing you there.
      </StyledTypography>
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        We would prefer for you to be with us for every part of the day.
      </StyledTypography>
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        However, if you can&apos;t  make it for the entire event, please join us as soon as you can
      </StyledTypography>
      <StyledTypography isItalic variant="subtitle1" textAlign="center">
        Bring an extremely high mood and your brightest smile with you!
      </StyledTypography>
    </Stack>
  );
};

export default memo(InviteText);
