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
        <ProfilePhoto src={avatar} alt="User avatar" className="avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileText>@{tag}</ProfileText>
        <ProfileText>{location}</ProfileText>
      </ProfileHeader>

      <ProfileStats>
        <ProfileStatsBlock>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </ProfileStatsBlock>
        <ProfileStatsBlock>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
