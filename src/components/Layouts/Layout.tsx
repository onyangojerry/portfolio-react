import React from "react";
import "./_layout.scss"; // Import the layout styles

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="app-container">
    <div className="content-wrapper">
      <aside className="sidebar">{/* Sidebar content */}</aside>
      <main className="main-content">{children}</main>
    </div>
  </div>
);

export default Layout;
