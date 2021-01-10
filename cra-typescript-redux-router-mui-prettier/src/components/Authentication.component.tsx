import { CSSProperties } from "react";
import { Button, Typography } from "@material-ui/core";

const style: CSSProperties = {
  borderStyle: "solid",
};

const AuthenticationComponent = () => (
  <div style={style}>
    <Typography variant='h1'>Authentication Component</Typography>
    <Typography>Authentication State: Logged out</Typography>
    <Button variant='contained' size='large' color='primary'>
      Login
    </Button>
    <Button variant='contained' size='large' color='secondary'>
      Logout
    </Button>
  </div>
);

export default AuthenticationComponent;
