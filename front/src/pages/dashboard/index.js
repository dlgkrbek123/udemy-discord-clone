import { styled } from '@mui/system';
import SideBar from '../../features/dashboard/index/components/SideBar';
import FriendSideBar from '../../features/dashboard/index/components/FriendSideBar';
import Messenger from '../../features/dashboard/index/components/Messenger';
import AppBar from '../../features/dashboard/index/components/AppBar';

const DashboardPage = () => {
  return (
    <Wrapper>
      <SideBar />
      <FriendSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  width: '100%',
  height: '100vh',
});

export default DashboardPage;
