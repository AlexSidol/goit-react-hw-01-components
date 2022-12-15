import PropTypes from 'prop-types';
import { UserFriendListItem, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const backgroundColor = isOnline ? 'green' : 'red';
  return (
    <UserFriendListItem>
      <FriendStatus style={{ backgroundColor: backgroundColor }}>
        {isOnline}
      </FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </UserFriendListItem>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.array),
};
