import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("saved-values");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);

  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const onResetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div>
      <Description />
      <Options
        onLeaveFeedback={onLeaveFeedback}
        totalFeedback={totalFeedback}
        onResetFeedback={onResetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback values={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
