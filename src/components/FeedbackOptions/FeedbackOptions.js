import PropTypes from 'prop-types';
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

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;