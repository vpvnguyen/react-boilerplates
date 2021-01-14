import { CSSProperties, Dispatch, useState, useEffect } from "react";
import { Button, CircularProgress, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthentication,
  selectIsAuthenticated,
} from "../redux/selectors/authenticationSelector";
import {
  authenticateAsync,
  unauthenticateAsync,
} from "../redux/reducers/authenticationSlice";
import HeaderTitleComponent from "./common/HeaderTitle.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const AuthenticationComponent = () => {
  const authentication: string = useSelector(selectAuthentication);
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);
  const dispatch: Dispatch<any> = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const getAuthenticationToken = async () =>
    new Promise((resolve) => setTimeout(resolve, 2000));

  const handleLogin = async () => {
    setLoading(true);
    setMessage("Logging in...");
    await getAuthenticationToken();
    dispatch(authenticateAsync());
    setLoading(false);
    setMessage("Successfully logged in!");
  };

  const handleLogout = async () => {
    setLoading(true);
    setMessage("Logging out...");
    await getAuthenticationToken();
    dispatch(unauthenticateAsync());
    setLoading(false);
    setMessage("Successfully logged out!");
  };

  useEffect(
    () =>
      console.log(
        `isAuthenticated ${isAuthenticated}, loading: ${loading}, message: ${message}`
      ),
    [isAuthenticated, loading, message]
  );

  return (
    <div style={style}>
      <HeaderTitleComponent title={"Authentication Component"} />
      <Typography>Authentication State: {authentication}</Typography>
      <Button
        variant='contained'
        size='large'
        color='primary'
        onClick={handleLogin}
        disabled={isAuthenticated || loading}
      >
        Login
      </Button>
      <Button
        variant='contained'
        size='large'
        color='secondary'
        onClick={handleLogout}
        disabled={!isAuthenticated || loading}
      >
        Logout
      </Button>
      {loading && (
        <div>
          <CircularProgress />
        </div>
      )}
      <Typography>{message}</Typography>
    </div>
  );
};

export default AuthenticationComponent;
