import { useState } from "react";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const [feedback, setFeedBack] = useState(false)

  const increaseGood = () => {
    setGood(good + 1);
    setFeedBack(true)
  };

  const increaseBad = () => {
    setBad(bad + 1);
    setFeedBack(true)
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
    setFeedBack(true)
  };

  const total = good + neutral + bad;

  const calcAverage = ()=>{
return total/3
  }

  const positivePercentage = () => {
    while (total>0) {
      return (good / total) * 100 + " %";
    }
    
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div className="buttons">
        <Button text="good" handleClick={increaseGood} />
        <Button text="neutral" handleClick={increaseNeutral} />
        <Button text="bad" handleClick={increaseBad} />
      </div>

      {feedback ? (
        <div className="display">
          <h1>Statistics</h1>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={total} />
              <StatisticLine text="average" value={calcAverage()} />
              <StatisticLine text="positive" value={positivePercentage()} />
            </tbody>
          </table>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
