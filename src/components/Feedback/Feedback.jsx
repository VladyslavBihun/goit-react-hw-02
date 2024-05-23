// Feedback.jsx

const Feedback = ({ values, totalFeedback }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {totalFeedback}</p>
      {/* <p>Positive: </p> */}
    </div>
  );
};

export default Feedback;
