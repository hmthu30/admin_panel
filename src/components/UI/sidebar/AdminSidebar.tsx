import Auxiliary from "@/hoc/Auxilitary/Auxilitary";
import React, { useState } from "react";
import {
  SidebarChildrenList,
  SidebarList,
  SidebarListWithLi,
} from "./SidebarList";
import { NavbarLITag } from "./Link";
import { NavBarLiType } from "@/utils/const/navbarConstant";

const AdminSidebar = (props: any) => {
  const [childSidebarOpen, setChildSidebarOpen] = useState<boolean>(false);

  if (props.list.type === "dropdown" && props.list.childrenList.length > 0) {
    return (
      <Auxiliary>
        <NavbarLITag
          className={NavBarLiType.Default}
          onClick={() => setChildSidebarOpen(!childSidebarOpen)}
          key={props.list.id}
        >
          <SidebarList {...props} />
        </NavbarLITag>
        {props.list.childrenList.length > 0 && (
          <SidebarChildrenList
            childrenList={props.list.childrenList}
            isOpen={childSidebarOpen}
            key={props.list.id}
          />
        )}
      </Auxiliary>
    );
  }
  return <SidebarListWithLi {...props} />;
};

export default AdminSidebar;
