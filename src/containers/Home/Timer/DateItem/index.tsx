import { addZero } from '@utils/helpers';
import Stack from '@mui/material/Stack';

import { StyledDate, StyledText } from './styled';

interface IDateItem {
  date: number;
  text: string;
}

const DateItem = ({ date, text } : IDateItem) => {
  return (
    <Stack alignItems="center" mx="15px" gap="10px">
      <StyledDate>
        {addZero(date)}
      </StyledDate>
      <StyledText>
        {text}
      </StyledText>
    </Stack>
  );
};

export default DateItem;
