import Button from '@mui/material/Button';
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton = () => {
  return (
    <Button
      style={{
        width: 48,
        minWidth: '0',
        height: 48,
        padding: 0,
        margin: 0,
        marginTop: 10,
        borderRadius: '16px',
        color: 'white',
        background: '#5865f2 ',
      }}
    >
      <GroupsIcon />
    </Button>
  );
};

export default MainPageButton;
