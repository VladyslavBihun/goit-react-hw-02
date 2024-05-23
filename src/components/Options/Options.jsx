// Options.jsx

const Options = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>

      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>

      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {/* <button>Reset</button> */}
    </div>
  );
};

export default Options;
