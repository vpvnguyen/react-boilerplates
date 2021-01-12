import { CSSProperties } from "react";
import { Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthentication,
  selectIsAuthenticated,
} from "../redux/selectors/authenticationSelector";
import {
  authenticateAsync,
  unauthenticateAsync,
} from "../redux/reducers/authenticationSlice";

const style: CSSProperties = {
  borderStyle: "solid",
};

const AuthenticationComponent = () => {
  const authentication = useSelector(selectAuthentication);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  console.log("auth");
  console.log(authentication);
  console.log(isAuthenticated);

  return (
    <div style={style}>
      <Typography variant='h1'>Authentication Component</Typography>
      <Typography>Authentication State: {authentication}</Typography>
      <Button
        variant='contained'
        size='large'
        color='primary'
        onClick={() => dispatch(authenticateAsync())}
        disabled={isAuthenticated}
      >
        Login
      </Button>
      <Button
        variant='contained'
        size='large'
        color='secondary'
        onClick={() => dispatch(unauthenticateAsync())}
        disabled={!isAuthenticated}
      >
        Logout
      </Button>
    </div>
  );
};

export default AuthenticationComponent;
