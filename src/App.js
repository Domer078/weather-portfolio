import "./App.css";
import "./weather.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />

      <footer>
        This project was coded by{" "}
        <a href="https://github.com/domer078">Khomotso Mabala</a> and is
        <a href="https://github.com/Domer078/weather-portfolio">
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and <a>hosted on Netlify</a>
      </footer>
    </div>
  );
}

export default App;
