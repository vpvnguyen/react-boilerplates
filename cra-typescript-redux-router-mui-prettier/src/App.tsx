import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home.page";

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Environment: <code>{process.env.NODE_ENV}</code>
      </p>

      <Router>
        <div>
          <Link to='/'>Home Page</Link>

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </header>
  </div>
);

export default App;
