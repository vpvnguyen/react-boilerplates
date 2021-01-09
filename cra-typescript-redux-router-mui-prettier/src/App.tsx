import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/Root.layouts";
import HomePage from "./pages/Home.page";
import DashboardPage from "./pages/Dashboard.page";

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Environment: <code>{process.env.NODE_ENV}</code>
      </p>

      <RootLayout>
        <Router>
          <div>
            <Link to='/'>Home Page</Link>
          </div>
          <div>
            <Link to='/dashboard'>Dashboard Page</Link>
          </div>

          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/dashboard'>
              <DashboardPage />
            </Route>
          </Switch>
        </Router>
      </RootLayout>
    </header>
  </div>
);

export default App;
