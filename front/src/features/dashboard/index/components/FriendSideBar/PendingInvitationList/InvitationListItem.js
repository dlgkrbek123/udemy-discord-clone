import { Box, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import Avatar from '../FriendList/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';

const InvitationListItem = ({ id, username, mail, onAccept, onReject }) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClickAccept = () => {
    onAccept({ id });
    setButtonDisabled(true);
  };

  const handleClickReject = () => {
    onReject({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={mail}>
      <div
        style={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: 42,
            marginTop: '8px',
          }}
        >
          <Avatar username={username} />
          <Typography
            variant="subtitle1"
            sx={{
              flexGrow: 1,
              marginLeft: '8px',
              fontWeight: 700,
              color: '#8e9297',
            }}
            align="left"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            onClickAccept={handleClickAccept}
            onClickReject={handleClickReject}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

export default InvitationListItem;
