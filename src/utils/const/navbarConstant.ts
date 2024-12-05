export const NavBarLayoutType = {
  Layout: "Layout",
  Sidebar: "Sidebar",
  Children: "Children",
} as const;

export const NavBarType = {
  Default: "default-nav",
  Modify: "modify-nav",
} as const;

export const NavBarULType = {
  Default: "default-ul",
  SubMenu: "submenu-ul",
  Modify: "modify-ul",
} as const;

export const NavBarLiType = {
  Default: "default-li",
  SubMenu: "submenu-li",
  Active: "active-li",
  Modify: "modify-li",
} as const;
