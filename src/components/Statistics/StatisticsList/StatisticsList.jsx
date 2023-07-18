import PropTypes from 'prop-types'
import css from './StatisticsList.module.css'

export const StatisticsList = ({ items }) => {
    return <ul className={css.statlist}>
        {items.map(({ id, label, percentage }) => (
            <li className={css.item} key={id}>
                <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>))}
    </ul>
}

StatisticsList.propTypes = {
   items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}