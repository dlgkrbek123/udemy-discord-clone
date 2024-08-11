import { Typography } from '@mui/material';

const FriendsTitle = ({ title }) => {
  return (
    <>
      <Typography
        sx={{
          marginTop: '10px',
          fontSize: '14px',
          color: '#8e9297',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>
    </>
  );
};

export default FriendsTitle;
