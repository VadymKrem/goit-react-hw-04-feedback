import PropTypes from 'prop-types';

import { OptionsList, OptionsItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsItem key={option}>
          <Button name={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </Button>
        </OptionsItem>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};