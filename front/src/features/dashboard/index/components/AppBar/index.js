import { styled } from '@mui/system';
import DropdownMenu from './DropdownMenu';

const AppBar = () => {
  return (
    <Wrapper>
      <DropdownMenu />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  position: 'absolute',
  right: 0,
  top: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% - 326px )',
  height: '48px',
  padding: '0 15px',
  borderBottom: '1px solid black',
  background: '#36393f',
});

export default AppBar;
