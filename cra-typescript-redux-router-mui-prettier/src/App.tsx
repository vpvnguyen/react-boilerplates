import logo from "./logo.svg";
import "./App.css";

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Environment: <code>{process.env.NODE_ENV}</code>
      </p>
    </header>
  </div>
);

export default App;
