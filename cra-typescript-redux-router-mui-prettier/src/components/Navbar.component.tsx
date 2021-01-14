import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authenticationSelector";

const style: CSSProperties = {
  borderStyle: "solid",
};

const NavbarComponent = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div style={style}>
      <Typography variant='h1'>Navbar Component</Typography>
      <div>
        <Link to='/'>Home Page</Link>
      </div>

      {isAuthenticated && (
        <div>
          <Link to='/dashboard'>Dashboard Page</Link>
        </div>
      )}

      {!isAuthenticated && <div>Log in to view Dashboard Page</div>}
    </div>
  );
};

export default NavbarComponent;
