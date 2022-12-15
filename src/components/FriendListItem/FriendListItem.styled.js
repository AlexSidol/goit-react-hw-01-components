import styled from 'styled-components';

export const UserFriendListItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing(6)};
`;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red;
  gap: 20px;
  align-items: center;
  font-size: ${({ theme }) => theme.spacing(6)};
`;
