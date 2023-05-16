import { ReactElement } from "react";
import "./styles.css";
import Header from "../Header";

interface LayoutProps {
  children: ReactElement;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <main className="mainContent"> {children}</main>
    </div>
  );
};

export default Layout;
