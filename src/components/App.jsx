import { useState } from 'react';
import { Container } from "./App.styled";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = ({ target: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        console.log(`Type feedback name - ${name} is not`);
    }
  };

  const countTotalFeedback = () => {
  return Object.values(this.state).reduce((total, curr) => (total += curr));
  };

  const countPositiveFeedbackPercentage = () => {
    // const { good } = this.state;
    let totalFeedbak = countTotalFeedback();
    return Math.round((good / totalFeedbak)*100);
  }

  // const { good, neutral, bad } = this.state;
  const totalFeedbacks = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(totalFeedbacks);

  return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}
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