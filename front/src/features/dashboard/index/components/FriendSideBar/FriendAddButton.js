import { useState } from 'react';
import CustomPrimaryButton from '../../../../../components/CustomPrimaryButton';
import FriendAddDialog from './FriendAddDialog';

const FriendAddButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickFriendAdd = () => {
    setOpen(true);
  };

  const handleCloseFriendAddDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <CustomPrimaryButton
        label="Add Friend"
        additionalStyles={{
          marginTop: 10,
          marginLeft: 5,
          width: '80%',
          height: '30px',
          background: '#3ba55d',
        }}
        onClick={handleClickFriendAdd}
      />
      <FriendAddDialog isOpen={open} onClose={handleCloseFriendAddDialog} />
    </>
  );
};

export default FriendAddButton;
