import { CssBaseline } from "@material-ui/core";
import { ReactNode, CSSProperties } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const style: CSSProperties = {
  borderStyle: "dotted",
  padding: "40px",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    <CssBaseline />
    <div>RootLayout</div>
    <div style={style}>{children}</div>
  </>
);

export default RootLayout;
