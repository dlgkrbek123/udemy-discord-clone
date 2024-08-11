import { styled } from '@mui/system';

const Avatar = ({ username, large }) => {
  return (
    <Wrapper style={large ? { width: 80, height: 80 } : {}}>
      {username.substring(0, 2)}
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '42px',
  height: '42px',
  marginLeft: '5px',
  borderRadius: 42,
  fontSize: '20px',
  fontWeight: 700,
  color: 'white',
  background: '#5865f2',
});

export default Avatar;
