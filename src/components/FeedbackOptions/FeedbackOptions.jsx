import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './FeedBackOptions.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onLeaveFeedback(option)}
            className={
              option === 'good'
                ? styles.green
                : option === 'neutral'
                ? styles.yellow
                : styles.red
            }
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};

export default FeedbackOptions;
