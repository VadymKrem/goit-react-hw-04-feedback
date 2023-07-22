import React, { Component } from 'react';
import { Container } from "./App.styled";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

onLeaveFeedback = ({ target: { name } }) => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  }

countPositiveFeedbackPercentage = () => {
    let goodFeedback = this.state.good;
    let totalFeedbak = this.countTotalFeedback();
    return Math.round((goodFeedback / totalFeedbak)*100);
  }

render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedbacks);

    return (
    
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedbacks === 0 ? <Notification message="There is no feedback"/> : 
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbacks}
            positivePercentage={positivePercentage}>
          </Statistics>}
        </Section>
      </Container>
    );
  };
}
