import styled from 'styled-components';

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.white};
`;

export const ProfileHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.yellow};
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 15px 10px;
`;

export const ProfilePhoto = styled.img`
  object-fit: cover;
`;

export const ProfileName = styled.p`
  font-family: Poppins;
  font-size: ${({ theme }) => theme.spacing(6)};
  text-transform: capitalize;
`;

export const ProfileText = styled.p`
  font-size: ${({ theme }) => theme.spacing(4)};
  margin-bottom: 0;
`;

export const ProfileStats = styled.ul`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.spacing(4)};
`;

export const ProfileStatsBlock = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: space-evenly;

  width: 33%;

  /* background-color: ${({ theme }) => theme.colors.yellow}; */

  padding: 15px 10px;
`;
