import "./styles.css";
import Header from "../Header";
import { LayoutProps } from "./types";

const Layout = ({ notifications, children, click }: LayoutProps) => {
  return (
    <div className="container">
      <Header click={click} notifications={notifications} />
      <main className="mainContent"> {children}</main>
    </div>
  );
};

export default Layout;
