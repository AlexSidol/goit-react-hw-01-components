import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendListBlock } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListBlock>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </FriendListBlock>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
