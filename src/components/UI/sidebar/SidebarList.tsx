import { NavBarLiType, NavBarULType } from "@/utils/const/navbarConstant";
import Link from "next/link";
import React from "react";
import { NavbarLITag, NavbarULTag } from "./Link";

const SidebarList = (props: any) => {
  return (
    <Link href={props.list.href}>
      {props.list.icon}/{props.list.label}
    </Link>
  );
};

const SidebarListWithLi = (props: any) => {
  return (
    <NavbarLITag className={NavBarLiType.Default} key={props.list.id}>
      <SidebarList {...props} />
    </NavbarLITag>
  );
};

interface SidebarMenuProps {
  childrenList: any[];
  isOpen: boolean;
}

const SidebarChildrenList: React.FC<SidebarMenuProps> = ({
  childrenList,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <NavbarULTag className={NavBarULType.Default}>
      {childrenList.map((child, index) => (
        <Link href={child.href}>
          <NavbarLITag
            className={NavBarLiType.Default}
            additionalStyle="flex justify-between items-center"
            key={index}
          >
            {child.label}
          </NavbarLITag>
        </Link>
      ))}
    </NavbarULTag>
  );
};

export { SidebarList, SidebarListWithLi, SidebarChildrenList };