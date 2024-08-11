import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system';
import SideBar from '../../features/dashboard/index/components/SideBar';
import FriendSideBar from '../../features/dashboard/index/components/FriendSideBar';
import Messenger from '../../features/dashboard/index/components/Messenger';
import AppBar from '../../features/dashboard/index/components/AppBar';
import { setUserDetails } from '../../store/actions/authActions';

const DashboardPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if (!userDetails || userDetails === 'undefined') {
      localStorage.clear();
      dispatch(setUserDetails(null));
      window.location.pathname = '/login';
    } else {
      dispatch(setUserDetails(JSON.parse(userDetails)));
    }
  }, []);

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
