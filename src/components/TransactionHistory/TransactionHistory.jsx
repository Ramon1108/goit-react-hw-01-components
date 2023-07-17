import transactions from "data/transactions.json"
import { TransactionHistoryHead } from "./TransactionHistoryHead/TransactionHistoryHead"
import { TransactionHistoryBody } from "./TransactionHistoryBody/TransactionHistoryBody"

export const TransactionHistory = ({ }) => {
    return <table className="transaction-history">
        <TransactionHistoryHead />
        <TransactionHistoryBody items={ transactions } />
    </table>
}