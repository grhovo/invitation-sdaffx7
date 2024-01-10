import { memo } from 'react';

import { useParams } from 'react-router-dom';

import { guestList } from './guestList';

const InviteText = () => {
  const { id } = useParams();
  const guest = guestList.find((item) => item.id === id);

  return (
    <>
      { `Dear ${guest?.name}, you are invited...` }
    </>
  );
};

export default memo(InviteText);
