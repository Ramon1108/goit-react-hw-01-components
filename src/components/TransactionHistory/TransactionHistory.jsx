import { TransactionHistoryHead } from "./TransactionHistoryHead/TransactionHistoryHead"
import { TransactionHistoryBody } from "./TransactionHistoryBody/TransactionHistoryBody"

export const TransactionHistory = ({ transactions }) => {
    return <table className="transaction-history">
        <TransactionHistoryHead collumns={ ['Type', 'Amount', 'Currency'] } />
        <TransactionHistoryBody items={ transactions } />
    </table>
}