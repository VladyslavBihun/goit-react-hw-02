// Feedback.jsx

const Feedback = ({ values }) => {
  return (
    <div>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
      {/* <p>Total: </p>
      <p>Positive: </p> */}
    </div>
  );
};

export default Feedback;
