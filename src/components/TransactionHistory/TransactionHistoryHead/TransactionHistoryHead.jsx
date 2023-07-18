export const TransactionHistoryHead = ({ collumns }) => {
    return <thead>
    <tr>
      {collumns.map((col) => (
        <th key={col}>{col}</th>))
      }
    </tr>
  </thead>
}