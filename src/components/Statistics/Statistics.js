import React from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import StatisticsList from './StatisticsList';
import s from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <h2 className={s.title}>Statistics</h2>
        {total === 0 
            ? <Notification message="No feedback given" /> 
            : <StatisticsList good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        }
    </div>
);

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;