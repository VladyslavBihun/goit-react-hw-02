const Feedback = ({ values, totalFeedback, percentageOfPositiveFeedback }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percentageOfPositiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
