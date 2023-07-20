import PropTypes from 'prop-types';
import { StatisticsTitle } from './StatisticsTitle/StatisticsTitle';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ data, title }) => {
  return (
    <section className="statistics">
      {title && <StatisticsTitle title={title} />}
      <StatisticsList items={data} />
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};
