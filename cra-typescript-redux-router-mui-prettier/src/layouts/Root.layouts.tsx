import { ReactNode, CSSProperties } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

const style: CSSProperties = {
  borderStyle: "dotted",
  padding: "20px",
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <div style={style}>RootLayout{children}</div>
);

export default RootLayout;