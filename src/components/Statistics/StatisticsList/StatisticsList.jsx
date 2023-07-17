import css from './StatisticsList.module.css'

export const StatisticsList = ({ items }) => {
    return <ul className={css.statlist}>
        {items.map(item => (
            <li className={css.item} key={item.id}>
                <span className={css.label}>{item.label}</span>
                <span className={css.percentage}>{item.percentage}%</span>
            </li>))}
    </ul>
}