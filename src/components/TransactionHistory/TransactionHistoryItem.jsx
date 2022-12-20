import PropTypes from 'prop-types';

import { TableItemTr, TableItemTd } from './TransactionHistoryItem.styled';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TableItemTr>
      <TableItemTd>{type}</TableItemTd>
      <TableItemTd>{amount}</TableItemTd>
      <TableItemTd>{currency}</TableItemTd>
    </TableItemTr>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
