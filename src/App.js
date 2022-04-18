import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="madrid" />
        <footer>
          {" "}
          This project was coded by{" "}
          <a
            href="https://github.com/NatCode08"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natalia Ortiz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NatCode08/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
