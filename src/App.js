import logo from './logo.svg';
import './App.css';
import { service } from './declarations/service'

async function Service() {
    const res = await service.greet("Your name");
    alert(res);
}

function Button() {
    return (
        <div style={{ margin: "30px" }}>
            <button onClick={ Service } style={{ padding: "5px" }}>Call canister</button>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Button />
      </header>
    </div>
  );
}

export default App;
