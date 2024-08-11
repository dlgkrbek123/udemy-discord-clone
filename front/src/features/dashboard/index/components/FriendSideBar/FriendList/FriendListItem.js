import Button from '@mui/material/Button';
import Avatar from './Avatar';
import Typography from '@mui/material/Typography';
import OnlineIndicator from './OnlineIndicator';

const FriendListItem = ({ id, username, isOnline }) => {
  return (
    <Button
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '42px',
        marginTop: 10,
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      <Avatar username={username} />
      <Typography
        variant="subtitle1"
        style={{
          marginLeft: '8px',
          fontWeight: 700,
          color: '#8e9297 ',
        }}
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

export default FriendListItem;
