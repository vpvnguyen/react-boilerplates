import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/Root.layout";
import HomePage from "./pages/Home.page";
import DashboardPage from "./pages/Dashboard.page";
import AuthenticationComponent from "./components/Authentication.component";
import NavbarComponent from "./components/Navbar.component";
import CounterComponent from "./components/Counter.component";

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <p>
        Environment: <code>{process.env.NODE_ENV}</code>
      </p>

      <RootLayout>
        <Router>
          <NavbarComponent />
          <AuthenticationComponent />
          <CounterComponent />

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
