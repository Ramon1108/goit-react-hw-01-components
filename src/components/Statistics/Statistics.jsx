
import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle'
import { StatisticsList } from './StatisticsList/StatisticsList'

export const Statistics = ({ data }) => {
    return <section className='statistics'>
        <StatisticsTitle title='Upload stats' />
        <StatisticsList items={data } />
    </section>
}