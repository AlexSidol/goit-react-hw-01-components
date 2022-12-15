import PropTypes from 'prop-types';

import {
  UserStatisticsBlock,
  UserStatisticsList,
  UserStatisticsItem,
  UserStatisticsTitle,
  StatisticsText,
} from './Statistics.styled';

const randomColor = () => {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
};

export const Statistics = ({ title, stats }) => {
  return (
    <UserStatisticsBlock>
      {title && <UserStatisticsTitle>{title}</UserStatisticsTitle>}
      <UserStatisticsList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <UserStatisticsItem
              key={id}
              style={{ backgroundColor: randomColor() }}
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
    })
  ).isRequired,
};
