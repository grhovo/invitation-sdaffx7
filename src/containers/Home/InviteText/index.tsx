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
      <StyledTypography isItalic variant="h3">
        {`Dear ${guest?.name},`}
      </StyledTypography>
      <StyledTypography isItalic variant="h8">
        You are warmly invited to join us in celebrating our wedding ceremony.
      </StyledTypography>
      <StyledTypography isItalic variant="h8">
        We eagerly look forward to seeing you there.
      </StyledTypography>
      <StyledTypography isItalic variant="h8">
        We would prefer for you to be with us for every part of the day.
      </StyledTypography>
      <StyledTypography isItalic variant="h8">
        However, if you can&apos;t  make it for the entire event, please join us as soon as you can
      </StyledTypography>
      <StyledTypography isItalic variant="h8">
        Bring an extremely high mood and your brightest smile with you.
      </StyledTypography>
    </Stack>
  );
};

export default memo(InviteText);
