import PropTypes from 'prop-types';
import { UserFriendListItem, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <UserFriendListItem>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </UserFriendListItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
