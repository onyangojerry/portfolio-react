import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./_layout.scss"; // Import the layout styles

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="content-wrapper">
    <Sidebar />
    <main className="main-content">{children}</main>
  </div>
);

export default Layout;
