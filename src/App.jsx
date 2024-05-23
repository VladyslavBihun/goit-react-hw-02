// App.jsx

import { useState } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

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

  return (
    <div>
      <Description />
      <Options onLeaveFeedback={onLeaveFeedback} />
      <Feedback values={values} />
    </div>
  );
}

export default App;
