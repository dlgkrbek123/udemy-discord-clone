import { styled } from '@mui/system';
import InvitationListItem from './InvitationListItem';

const DUMMY_INVITATIONS = [
  {
    _id: 1,
    senderId: {
      username: 'Mark',
      mail: 'dummy@ad.com',
    },
  },
  {
    _id: 2,
    senderId: {
      username: 'John ',
      mail: 'john@ad.com',
    },
  },
];

const PendingInvitationList = ({ title }) => {
  return (
    <Wrapper>
      {DUMMY_INVITATIONS.map((i) => {
        return (
          <InvitationListItem
            key={i._id}
            id={i._id}
            username={i.senderId.username}
            mail={i.senderId.mail}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '22%',
  overflow: 'auto ',
});

export default PendingInvitationList;
