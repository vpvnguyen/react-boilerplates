import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/selectors/authenticationSelector";

const style: CSSProperties = {
  borderStyle: "solid",
};

const DashboardComponent = () => {
  const isAuthenticated: boolean = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) return <div>Permission Denied</div>;
  return (
    <div style={style}>
      <Typography>Dashboard component</Typography>
      <Typography>Very sensitive data</Typography>
    </div>
  );
};

export default DashboardComponent;
