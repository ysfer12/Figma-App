import React from "react";
import Navbar from "./_components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <Navbar />
      <body>{children}</body>
    </html>
  );
};

export default Layout;
