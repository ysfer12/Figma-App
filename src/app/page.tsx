import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      {/* Additional content for footer or other elements */}
    </div>
  );
};

export default Layout;
