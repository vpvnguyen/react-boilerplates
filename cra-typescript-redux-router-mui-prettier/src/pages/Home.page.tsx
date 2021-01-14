import { CSSProperties } from "react";
import HomeComponent from "../components/Home.component";
import HeaderTitleComponent from "../components/common/HeaderTitle.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const HomePage = () => (
  <div style={style}>
    <HeaderTitleComponent title={"Home Page"} />
    <HomeComponent />
  </div>
);

export default HomePage;
