import { CSSProperties } from "react";
import DashboardComponent from "../components/Dashboard.component";
import HeaderTitleComponent from "../components/common/HeaderTitle.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const DashboardPage = () => (
  <div style={style}>
    <HeaderTitleComponent title={"Dashboard Page"} />
    <DashboardComponent />
  </div>
);

export default DashboardPage;
