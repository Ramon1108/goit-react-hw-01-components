import data from 'data/data.json'
import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle'
import { StatisticsList } from './StatisticsList/StatisticsList'

export const Statistics = ({ }) => {
    return <section className='statistics'>
        <StatisticsTitle title='Upload stats' />
        <StatisticsList items={data } />
    </section>
}