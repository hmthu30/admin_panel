import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import Auxiliary from "@/hoc/Auxilitary/Auxilitary";

const Sidebar: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return null;
  }

  return (
    <Auxiliary>
      <div>
        <h1>LOGO</h1>
      </div>
      <nav className="h-full">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Auxiliary>
  );
};

export default Sidebar;
