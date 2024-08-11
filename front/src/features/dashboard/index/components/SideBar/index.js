import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';

const SideBar = () => {
  return (
    <Wrapper>
      <MainPageButton />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '72px',
  height: '100% ',
  background: '#202225',
});

export default SideBar;
