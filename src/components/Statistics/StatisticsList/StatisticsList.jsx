import PropTypes from 'prop-types';
import css from './StatisticsList.module.css';

export const StatisticsList = ({ items }) => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomColor = () => {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
  };
  return (
    <ul className={css.statlist}>
      {items.map(({ id, label, percentage }) => (
        <li
          className={css.item}
          key={id}
          style={{ backgroundColor: generateRandomColor() }}
        >
          <span className={css.label}>{label}</span>
          <span className={css.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
