import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import RootLayout from "./layouts/Root.layout";
import HomePage from "./pages/Home.page";
import DashboardPage from "./pages/Dashboard.page";
import AuthenticationComponent from "./components/Authentication.component";
import AppBar from "./components/AppBar";
import NavbarComponent from "./components/Navbar.component";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    custom: any;
  }

  interface ThemeOptions {
    custom: any;
  }
}
const colors = {
  RED: "#FF0000",
  ORANGE: "#FF7F00",
  YELLOW: "#FFFF00",
  GREEN: "#00FF00",
  BLUE: "#0000FF",
  BROWN: "#964B00",
  PURPLE: "#800080",
};

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        body: {
          color: "#000000",
          backgroundColor: "#FFFFFF",
        },
      },
    },
  },
  palette: {
    // type: "dark",
    primary: {
      light: "#ffffff",
      main: colors.BROWN,
      dark: "#301934",
    },
    secondary: {
      light: "#ffcccb",
      main: colors.PURPLE,
      dark: "#B22222",
    },
  },
  typography: {
    fontSize: 16,
  },
  custom: {
    primary: colors.BLUE,
    secondary: colors.RED,
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
            <AppBar />
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
