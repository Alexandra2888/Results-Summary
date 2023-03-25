import "./Results.css";

const Results = () => {
  return (
    <main className="results grid-flow" data-spacing="large">
      <p className="section-title">Your Result</p>
      <p className="result-score">
        <span>76</span>of 100
      </p>
      <div className="grid-flow">
        <p className="result-rank">Great</p>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </main>
  );
};

export default Results;
