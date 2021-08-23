import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({onLeaveFeedback, options}) => (
    <div>
        {options.map(option => (
            <button 
            type="button" 
            onClick={onLeaveFeedback}
            className={s.button}
            >
                {option}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string)
};

export default FeedbackOptions;
