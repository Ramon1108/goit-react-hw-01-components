import PropTypes from 'prop-types'

export const TransactionHistoryBody = ({ items }) => {
    return <tbody>
        {items.map(({ id, type, amount, currency }) => {
    return (<tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>  ) })}
    
  </tbody>
}

TransactionHistoryBody.propTypes = {items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency:PropTypes.string.isRequired
        })
    )}