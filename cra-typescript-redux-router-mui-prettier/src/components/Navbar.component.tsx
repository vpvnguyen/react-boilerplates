import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const style: CSSProperties = {
  borderStyle: "solid",
};

const NavbarComponent = () => (
  <div style={style}>
    <Typography variant='h1'>Navbar Component</Typography>
    <div>
      <Link to='/'>Home Page</Link>
    </div>
    <div>
      <Link to='/dashboard'>Dashboard Page</Link>
    </div>
  </div>
);

export default NavbarComponent;
