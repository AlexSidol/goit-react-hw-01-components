import styled from 'styled-components';

export const FriendListBlock = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  overflow: hidden;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.yellow};
`;
