import { CSSProperties } from "react";
import { Typography } from "@material-ui/core";
import { NotificationComponent } from "../components/Notification.component";

const style: CSSProperties = {
  borderStyle: "solid",
};

const HomeComponent = () => (
  <>
    <div style={style}>
      <Typography>Home component</Typography>
      <Typography>Welcome!</Typography>
    </div>

    <div style={style}>
      <NotificationComponent
        title={"Notification Inside of SnackbarProvider"}
      />
    </div>
  </>
);

export default HomeComponent;
