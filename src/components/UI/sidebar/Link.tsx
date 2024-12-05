import React from "react";
import { twMerge } from "tailwind-merge";
import {
  NavBarLiType,
  NavBarType,
  NavBarULType,
} from "@/utils/const/navbarConstant";

interface NavbarTagProps {
  children: React.ReactNode;
  className: (typeof NavBarType)[keyof typeof NavBarType];
  additionalStyle?: string;
}

export function NavbarTag({
  children,
  className,
  additionalStyle,
}: NavbarTagProps) {
  const classNameMap: Record<
    (typeof NavBarType)[keyof typeof NavBarType],
    string
  > = {
    [NavBarType.Default]: "h-full",
    [NavBarType.Modify]: "bg-gray-200",
  };

  return (
    <nav className={twMerge(classNameMap[className], additionalStyle)}>
      {children}
    </nav>
  );
}

interface NavbarULTagProps {
  children: React.ReactNode;
  className: (typeof NavBarULType)[keyof typeof NavBarULType];
  additionalStyle?: string;
}

export function NavbarULTag({
  children,
  className,
  additionalStyle,
}: NavbarULTagProps) {
  const classNameMap: Record<
    (typeof NavBarULType)[keyof typeof NavBarULType],
    string
  > = {
    [NavBarULType.Default]: "list-none p-0",
    [NavBarULType.SubMenu]: "pl-4",
    [NavBarULType.Modify]: "space-x-4",
  };

  return (
    <ul className={twMerge(classNameMap[className], additionalStyle)}>
      {children}
    </ul>
  );
}

interface NavbarLITagProps {
  children: React.ReactNode;
  className: (typeof NavBarLiType)[keyof typeof NavBarLiType];
  additionalStyle?: string;
}

export function NavbarLITag({
  children,
  className,
  additionalStyle,
}: NavbarLITagProps) {
  const classNameMap: Record<
    (typeof NavBarLiType)[keyof typeof NavBarLiType],
    string
  > = {
    [NavBarLiType.Default]: "text-black",
    [NavBarLiType.SubMenu]: "text-gray-600",
    [NavBarLiType.Active]: "text-blue-500 font-bold",
    [NavBarLiType.Modify]: "text-red-500",
  };

  return (
    <li className={twMerge(classNameMap[className], additionalStyle)}>
      {children}
    </li>
  );
}
