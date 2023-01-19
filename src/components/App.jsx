
import { useState } from "react";

import { Statistics } from "./Statictics/Statictics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOption";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from './GlobalStyle'


export const App =()=> {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const buttons = ['good', 'neutral', 'bad']
  
  const feedback = (event) => {
    const { name } = event.target;
    if (name === "good") {
      setGood(prevState=>prevState+1)
    }
    
    if (name === "neutral") {
      setNeutral(prevState=>prevState+1)
    }
    
    if (name === "bad") {
      setBad(prevState=>prevState+1)
    }
  };

 const totalFeedback = good + neutral + bad
 const positiveFeedbackPercentage = Number.parseInt(good / (good + neutral + bad) * 100)
  
  
    return (
      <Section title='Please leave feedback'>
      <FeedbackOptions options={buttons} onLeaveFeedback={feedback}/>
      
      { totalFeedback?
        <Statistics
        title='Statistics'
        good={good}
        neutral={neutral}
        bad={bad}
        total={totalFeedback}
        positivePercentage={positiveFeedbackPercentage}  
          /> :
        <Notification message='There is no feedback'/>
      } 
      <GlobalStyle/>
      </Section>
           
    )
      
    
}


















