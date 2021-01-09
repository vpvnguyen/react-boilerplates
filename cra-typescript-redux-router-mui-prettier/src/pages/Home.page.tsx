import { CSSProperties } from "react";
import HomeComponent from "../components/Home.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const HomePage = () => (
  <div style={style}>
    <h1>Home Page</h1>
    <HomeComponent />
  </div>
);

export default HomePage;
