import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";

const style: CSSProperties = {
  borderStyle: "solid",
};

const DashboardComponent = () => (
  <div style={style}>
    <Typography>Dashboard component</Typography>
    <Typography>You are not logged in</Typography>
  </div>
);

export default DashboardComponent;
