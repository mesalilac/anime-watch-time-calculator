import './App.css';

function Calculate() {
  let episodes_number_input = document.getElementById("number-of-episodes")
  let episodes_number = document.getElementById("number-of-episodes").value
  let calculate = document.getElementById("calculate-button")

  
  if (!episodes_number) {
    episodes_number_input.style.borderColor = "#a94646"
    calculate.style.backgroundColor = "#a94646"
    return
  }
}

function App() {
  return (
    <div className="App">
      <input 
        id="number-of-episodes" 
        placeholder="Number of episodes"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <button 
        id="calculate-button" 
        onClick={Calculate}>
          Calculate
      </button>

      <p>
      </p>
    </div>
  );
}

export default App;
