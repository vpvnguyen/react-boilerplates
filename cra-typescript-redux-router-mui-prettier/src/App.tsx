import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/Root.layout";
import HomePage from "./pages/Home.page";
import DashboardPage from "./pages/Dashboard.page";
import AuthenticationComponent from "./components/Authentication.component";
import NavbarComponent from "./components/Navbar.component";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: "#ffffff",
      main: "#3f51b5",
      dark: "#301934",
    },
    secondary: {
      light: "#ffcccb",
      main: "#f50057",
      dark: "#B22222",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

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
  </ThemeProvider>
);

export default App;
