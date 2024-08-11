import Box from '@mui/material/Box';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnlineIndicator = ({ username, large }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: 5,
        display: 'flex',
        alignItems: 'center',
        color: '#3ba55d',
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default OnlineIndicator;
