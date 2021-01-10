import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";

const style: CSSProperties = {
  borderStyle: "solid",
};

const HomeComponent = () => (
  <div style={style}>
    <Typography>Home component</Typography>
    <Typography>Welcome!</Typography>
  </div>
);

export default HomeComponent;
