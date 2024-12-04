import Navbar from "@/components/UI/navbar/Navbar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const NavbarLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="h-full w-[25%] bg-gray-200">
        <Navbar />
      </div>
      <div className="h-full w-[75%] bg-white">{children}</div>
    </div>
  );
};

export default NavbarLayout;
