import PropTypes from 'prop-types';

import { TableItemTr, TableItemTd } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ id, type, amount, currency }) => {
  return (
    <TableItemTr key={id}>
      <TableItemTd>{type}</TableItemTd>
      <TableItemTd>{amount}</TableItemTd>
      <TableItemTd>{currency}</TableItemTd>
    </TableItemTr>
  );
};

TransactionHistoryItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
