import Sidebar from "@/components/UI/sidebar/Sidebar";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="h-full w-[25%] bg-white">
        <Sidebar />
      </div>
      <div className="h-full w-[75%] bg-gray-200">{children}</div>
    </div>
  );
};

export default SidebarLayout;
