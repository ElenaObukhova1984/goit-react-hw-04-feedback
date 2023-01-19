import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FeedbackOption,FeedbackContainer} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <FeedbackContainer>
            {options.map((option) => (
                <FeedbackOption key={nanoid()} type="button" name={option} onClick={onLeaveFeedback}>
                    {option}
                </FeedbackOption>
            ))}
        </FeedbackContainer>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}
