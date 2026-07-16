import "./App.css";
import "./Weather.css";

import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />

      <footer className="mb-4">
        This project was coded by{" "}
        <a href="https://github.com/domer078" target="_blank" rel="noreferrer">
          Khomotso Mabala
        </a>{" "}
        and is
        <a
          href="https://github.com/Domer078/weather-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://shimmering-kitsune-6975a6.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
