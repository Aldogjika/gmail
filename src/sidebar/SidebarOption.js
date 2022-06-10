import React from "react";
import "./SidebarOption.css";

function SidebarOption({ Icon, title, number, selected, clickOption }) {
  return (
    <div
      className={`${selected && "sidebarOption--selected"} sidebarOption`}
      onClick={clickOption}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
