import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          This project was coded by Natalia Ortiz and is{" "}
          <a
            href="https://github.com/NatCode08/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
