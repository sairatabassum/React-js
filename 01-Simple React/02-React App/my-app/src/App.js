import logo from "./logo.svg";
import "./App.css";

const number = 555;
const singer = { name: "DR.Mahfuz", job: "singer" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude. React how are you</h3>
        </div>
        <div className="music">
          <p>Name: {222 + number}</p>
          <p>
            Name: {singer.name} job: {singer.job}
          </p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
