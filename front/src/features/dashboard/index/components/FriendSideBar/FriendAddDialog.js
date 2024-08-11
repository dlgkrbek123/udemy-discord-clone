import { useMemo, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import InputWithLabel from '../../../../../components/InputWithLabel';
import CustomPrimaryButton from '../../../../../components/CustomPrimaryButton';

const FriendAddDialog = ({ isOpen, onConfirm, onClose }) => {
  const [mail, setMail] = useState('');

  const isFormValid = useMemo(() => {
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      mail
    );

    return isEmailValid;
  }, [mail]);

  const handleConfirm = () => {};

  const handleClose = () => {
    onClose();
    setMail('');
  };

  return (
    <Dialog
      open={isOpen}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          // handleCloseFriendAddDialog();
        },
      }}
      onClose={handleClose}
    >
      <DialogTitle>
        <Typography>Invite a Friend</Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Typography>
            Enter e-mail address of friend which you would like to invite
          </Typography>
        </DialogContentText>
        <InputWithLabel
          label="Mail"
          placeholder="Enter mail address"
          value={mail}
          setValue={setMail}
        />
      </DialogContent>
      <DialogActions>
        <CustomPrimaryButton
          label="Send"
          disabled={!isFormValid}
          additionalStyles={{
            marginLeft: '15px',
            marginRight: '15px',
            marginBottom: '10px ',
          }}
          // onClick={}
        ></CustomPrimaryButton>
      </DialogActions>
    </Dialog>
  );
};

export default FriendAddDialog;
