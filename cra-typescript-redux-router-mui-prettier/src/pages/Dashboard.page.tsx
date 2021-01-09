import { CSSProperties } from "react";
import DashboardComponent from "../components/Dashboard.component";

const style: CSSProperties = {
  borderStyle: "solid",
};
const DashboardPage = () => (
  <div style={style}>
    <h1>Dashboard Page</h1>
    <DashboardComponent />
  </div>
);

export default DashboardPage;
