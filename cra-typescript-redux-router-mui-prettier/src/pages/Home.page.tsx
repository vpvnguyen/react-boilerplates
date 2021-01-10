import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import HomeComponent from "../components/Home.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const HomePage = () => (
  <div style={style}>
    <Typography variant='h1'>Home Page</Typography>
    <HomeComponent />
  </div>
);

export default HomePage;
