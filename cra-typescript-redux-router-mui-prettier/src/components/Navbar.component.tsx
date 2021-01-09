import { CSSProperties } from "react";
import { Link } from "react-router-dom";

const style: CSSProperties = {
  borderStyle: "solid",
};

const NavbarComponent = () => (
  <div style={style}>
    <h1>Navbar Component</h1>
    <div>
      <Link to='/'>Home Page</Link>
    </div>
    <div>
      <Link to='/dashboard'>Dashboard Page</Link>
    </div>
  </div>
);

export default NavbarComponent;
