import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 800px;
  margin: 0px auto;
  padding: 15px 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.yellow};
  font-size: ${({ theme }) => theme.spacing(4)};

  /* border: 2px solid #ccc; */
`;

export const TransactionHistoryThead = styled.thead`
  /* align-items: center;
  padding: 4px 15px;
  min-width: 80px; */
`;

export const TableHeaderTr = styled.tr`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  background: ${({ theme }) => theme.colors.accent};
`;

export const TableItemTh = styled.th`
  align-items: center;
  padding: 4px 15px;
  min-width: 180px;
  border: 1px solid #ccc;
`;
