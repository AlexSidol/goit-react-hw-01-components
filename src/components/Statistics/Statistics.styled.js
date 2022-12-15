import styled from 'styled-components';

export const UserStatisticsBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 400px;
  overflow: hidden;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.yellow};
`;

export const UserStatisticsTitle = styled.h2`
  font-size: ${({ theme }) => theme.spacing(8)};
  margin: 0 auto;
`;

export const UserStatisticsList = styled.ul`
  display: flex;
  gap: 20px;
  font-size: ${({ theme }) => theme.spacing(6)};
`;

export const UserStatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.yellow};
`;

export const StatisticsText = styled.span`
  text-align: center;
  gap: 10px;
  font-size: ${({ theme }) => theme.spacing(5)};
  width: 60px;
`;
