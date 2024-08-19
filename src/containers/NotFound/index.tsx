import { memo } from 'react';

import { Stack, Typography } from '@mui/material';

import { StyledContainer } from './styled';

// TODO: style text
const NotFound = () => (
  <StyledContainer>
    <Stack sx={{ position: 'relative' }}>
      <Typography>Page Not Found</Typography>
    </Stack>
  </StyledContainer>
);

export default memo(NotFound);
