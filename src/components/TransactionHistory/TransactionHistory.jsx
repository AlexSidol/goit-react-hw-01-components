import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';

import {
  TransactionHistoryTable,
  TransactionHistoryThead,
  TableHeaderTr,
  TableItemTh,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryThead>
        <TableHeaderTr>
          <TableItemTh>Type</TableItemTh>
          <TableItemTh>Amount</TableItemTh>
          <TableItemTh>Currency</TableItemTh>
        </TableHeaderTr>
      </TransactionHistoryThead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TransactionHistoryItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
// {type, amount, currency}
