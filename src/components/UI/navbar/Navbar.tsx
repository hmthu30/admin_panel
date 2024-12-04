import React from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const { token } = useAuth();

  if (!token) {
    return null;
  }

  return (
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
  );
};

export default Navbar;
