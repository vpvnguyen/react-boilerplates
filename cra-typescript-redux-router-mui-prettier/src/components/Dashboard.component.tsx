import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authenticationSelector";

interface Style {
  component: CSSProperties;
  deniedText: CSSProperties;
}

const style: Style = {
  component: {
    borderStyle: "solid",
  },
  deniedText: {
    color: "red",
  },
};

const DashboardComponent = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);

  if (!isAuthenticated)
    return <Typography style={style.deniedText}>Permission Denied</Typography>;

  return (
    <div style={style.component}>
      <Typography>Dashboard component</Typography>
      <Typography>Very sensitive data</Typography>
    </div>
  );
};

export default DashboardComponent;
