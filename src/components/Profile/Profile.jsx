import PropTypes from 'prop-types';
import {
  UserProfile,
  ProfileHeader,
  ProfilePhoto,
  ProfileName,
  ProfileText,
  ProfileStats,
  ProfileStatsBlock,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <ProfileHeader>
        <ProfilePhoto src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileHeader>

      <ProfileStats>
        <ProfileStatsBlock>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <span>Views</span>
          <span>{stats.views}</span>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </ProfileStatsBlock>
      </ProfileStats>
    </UserProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
