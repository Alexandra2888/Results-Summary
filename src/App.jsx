import './App.css';
import Results from "./results/Results";
import Summary from "./summary/Summary";

const App = () => {

  return (
    <main>
      <div className="result-summary">
        <Results />
        <Summary />
      </div>
    </main>
  );
}

export default App;
