import { ReactElement } from "react";
import "./styles.css";
import Header from "../Header";

interface LayoutProps {
  children: ReactElement;
  click: () => void;
}
const Layout = ({ children, click }: LayoutProps) => {
  return (
    <div className="container">
      <Header click={click} />
      <main className="mainContent"> {children}</main>
    </div>
  );
};

export default Layout;
