import './App.css';

function calculate() {
  let episodes_number = document.getElementById("number-of-episodes").value
  console.log(episodes_number)
}

function App() {
  return (
    <div className="App">
      <input id="number-of-episodes" placeholder="Number of episodes"/>
      <button id="calculate-button" onClick={calculate}>Calculate</button>

      <p>
      </p>
    </div>
  );
}

export default App;
