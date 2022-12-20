import PropTypes from 'prop-types';

import {
  UserStatisticsBlock,
  UserStatisticsList,
  UserStatisticsItem,
  UserStatisticsTitle,
  StatisticsText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <UserStatisticsBlock>
      {title && <UserStatisticsTitle>{title}</UserStatisticsTitle>}
      <UserStatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <UserStatisticsItem
              key={id}
              // style={{ backgroundColor: randomColor() }}-перенесла в стилі
            >
              <StatisticsText>{label}</StatisticsText>
              <StatisticsText>{percentage}%</StatisticsText>
            </UserStatisticsItem>
          );
        })}
      </UserStatisticsList>
    </UserStatisticsBlock>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
