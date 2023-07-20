import PropTypes from 'prop-types';
import { TransactionHistoryHead } from './TransactionHistoryHead/TransactionHistoryHead';
import { TransactionHistoryBody } from './TransactionHistoryBody/TransactionHistoryBody';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <TransactionHistoryHead collumns={['Type', 'Amount', 'Currency']} />
      <TransactionHistoryBody items={transactions} />
    </table>
  );
};

TransactionHistory.propTypes = { transactions: PropTypes.array.isRequired };
