import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import DashboardComponent from "../components/Dashboard.component";

const style: CSSProperties = {
  borderStyle: "solid",
};
const DashboardPage = () => (
  <div style={style}>
    <Typography variant='h1'>Dashboard Page</Typography>
    <DashboardComponent />
  </div>
);

export default DashboardPage;
