import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const RedirectInfo = ({
  text,
  redirectText,
  additionalStyles,
  redirectHandler,
}) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{ color: '#72767d' }}
      style={additionalStyles ?? {}}
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

export default RedirectInfo;
