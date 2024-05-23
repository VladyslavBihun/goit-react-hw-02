// App.jsx

import { useState } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  return (
    <div>
      <Description />
      <Options onLeaveFeedback={onLeaveFeedback} />
      {totalFeedback > 0 ? (
        <Feedback values={values} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
