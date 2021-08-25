import React, { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / total);
  };

  handleIncrement = (evt) => {
      const feedBackType = evt.target.textContent.toLowerCase();
      if(feedBackType === 'good') {
        this.setState((prevState) => ({
            good: prevState.good + 1,
        }));

      } else if(feedBackType === 'neutral') {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1,
        }));

      } else if (feedBackType === 'bad') {
        this.setState((prevState) => ({
            bad: prevState.bad + 1,
        }));
      };
  };

  render() {
    const {good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
        <>
          <Section title="Please leave feedback">
            <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.handleIncrement} />
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
          </Section>
        </>
    )}
}

export default App;
