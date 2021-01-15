import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, makeStyles } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import { selectIsAuthenticated } from "../redux/selectors/authenticationSelector";
import HeaderTitleComponent from "./common/HeaderTitle.component";

const useStyles = makeStyles(() => ({
  component: {
    borderStyle: "solid",
  },
  link: {
    textDecoration: "none",
    "&:visited": {
      textDecoration: "none",
    },
  },
}));

const NavbarComponent = () => {
  const styles: ClassNameMap = useStyles();
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);

  return (
    <div className={styles.component}>
      <HeaderTitleComponent title={"Navbar Component"} />

      <Button component={Link} to='/' variant='outlined' color='primary'>
        Home Page
      </Button>

      <Button
        component={Link}
        to='/dashboard'
        variant='outlined'
        color='secondary'
        disabled={!isAuthenticated}
      >
        Dashboard Page
      </Button>
    </div>
  );
};

export default NavbarComponent;
