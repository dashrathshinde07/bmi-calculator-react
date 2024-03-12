import "./App.css";
import { useState } from "react";

function App() {
  // making state of our application

  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic

  let calBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter a valid weight and Height");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      // message

      if (bmi < 25) {
        setMessage("You are Under Weight 🏋️‍♂️");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a Healthy Person 💪🍏");
      } else {
        setMessage("You are Overweight 🏋️‍♂️🥗");
      }
    }
  };

  // Reload button

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div>
            <label htmlFor="">Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter wight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-reload" type="submit" onClick={reload}>
              Reload
            </button>
          </div>

          <div className="center">
            <h3>Your BMI is: {bmi} </h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
