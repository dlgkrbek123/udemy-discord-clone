import { styled } from '@mui/system';
import FriendAddButton from './FriendAddButton';
import FriendsTitle from './FriendsTitle';
import FriendList from './FriendList';
import PendingInvitationList from './PendingInvitationList';

const FriendSideBar = () => {
  return (
    <Wrapper>
      <FriendAddButton />
      <FriendsTitle title="Private Messages" />
      <FriendList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationList />
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '224px ',
  height: '100%',
  background: '#2f3136',
});

export default FriendSideBar;
