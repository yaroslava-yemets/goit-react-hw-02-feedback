import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const StatisticsList = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={s.list}>
        <li className={s.item}>Good: <span>{good}</span></li>
        <li className={s.item}>Neutral: <span>{neutral}</span></li>
        <li className={s.item}>Bad: <span>{bad}</span></li>
        <li className={s.item}>Total: <span>{total}</span></li>
        <li className={s.item}>Positive feedback: <span>{positivePercentage}%</span></li>
    </ul>
);

StatisticsList.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default StatisticsList;