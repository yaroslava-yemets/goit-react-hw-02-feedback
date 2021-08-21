import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback}) => (
    <div>
        <button 
            type="button" 
            onClick={onLeaveFeedback}
            className={s.button}
        >
            Good
        </button>
        <button 
            type="button" 
            onClick={onLeaveFeedback}
            className={s.button}
        >
            Neutral
        </button>
        <button 
            type="button" 
            onClick={onLeaveFeedback}
            className={s.button}
        >
            Bad
        </button>
    </div>
);

export default FeedbackOptions;