import { CSSProperties } from "react";

const style: CSSProperties = {
  borderStyle: "solid",
};

const AuthenticationComponent = () => (
  <div style={style}>
    <h1>Authentication Component</h1>
    <p>Authentication State: Logged out</p>
    <button>Login</button>
    <button>Logout</button>
  </div>
);

export default AuthenticationComponent;
