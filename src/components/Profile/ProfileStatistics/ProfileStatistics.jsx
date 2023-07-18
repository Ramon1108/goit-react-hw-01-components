import PropTypes from 'prop-types'
import css from "./ProfileStatistics.module.css"

export const Statistics = ({ stats }) => {
  return <ul className={css.statistics}>
 {Object.entries(stats).map(([key, value]) => (
        <li className={css.stat} key={key}>
          <span className={css.label}>{key}</span>
          <span className={css.quantity}>{value}</span>
        </li>
      ))}
  </ul>
}

Statistics.propTypes = {
  stats: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,}