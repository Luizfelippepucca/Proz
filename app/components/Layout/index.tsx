import { ReactElement } from "react";
import "./styles.css";
import Header from "../Header";

interface LayoutProps {
  children: ReactElement;
  click: () => void;
  notifications: number;
}
const Layout = ({ notifications, children, click }: LayoutProps) => {
  return (
    <div className="container">
      <Header click={click} notifications={notifications} />
      <main className="mainContent"> {children}</main>
    </div>
  );
};

export default Layout;
