import './App.css';

function Calculate() {
  const colors = {
    errorBorderColor: "#a94646",
    errorBackGroundColor: "#a94646",
    defaultBorderColor: "#4654a9",
    defaultBackGroundColor: "#4654a9"
  }
  
  let episodes_number_input = document.getElementById("number-of-episodes")
  let episodes_number = document.getElementById("number-of-episodes").value
  let calculate = document.getElementById("calculate-button")
  
  if (!episodes_number || !Number(episodes_number)) {
    episodes_number_input.style.borderColor = colors.errorBorderColor
    calculate.style.backgroundColor = colors.errorBackGroundColor
    return
  } else {
    episodes_number_input.style.borderColor = colors.defaultBorderColor
    calculate.style.backgroundColor = colors.defaultBackGroundColor
    
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
