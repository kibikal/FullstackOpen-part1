import { useState } from "react";
import Button from "./components/Button";
import Results from "./components/Results";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGood = () => {
    setGood(good + 1);
  };

  const increaseBad = () => {
    setBad(bad + 1);
  };

  const increaseNeutral = () => {
    setNeutral(neutral + 1);
  };

  return (
    <div>
    <h1>Give feedback</h1>
      <div className="buttons">
        <Button text="good" handleClick={increaseGood} />
        <Button text="neutral" handleClick={increaseNeutral} />
        <Button text="bad" handleClick={increaseBad} />
      </div>

      <div className="display">
      <h1>Statistics</h1>
        <Results text="good" numberOfVotes={good}/>
        <Results text ="neutral" numberOfVotes={neutral}/>
        <Results text="bad" numberOfVotes={bad}/>
      </div>
    </div>
  );
};

export default App;
