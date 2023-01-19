import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "./Statictics/Statictics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOption";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from './GlobalStyle'


export class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  }

  onLeaveFeedback = (event) => {
    const name = event.target.name;
    this.setState((prevState) => ({
      [name]: prevState[name] + 1
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  };

  countPositiveFeedbackPercentage = () => {
    return Number.parseInt(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100)
  }
  

render() {
  const { good, neutral, bad } = this.state;
  const objKey = Object.keys(this.state);

    return (
      <Section title='Please leave feedback'>
      <FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback}/>
      
      {this.countTotalFeedback() ?
        <Statistics
        title='Statistics'
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        positivePercentage={this.countPositiveFeedbackPercentage()}  
          /> :
        <Notification message='There is no feedback'/>
      } 
      <GlobalStyle/>
      </Section>
           
    )
      
    
}
}

















