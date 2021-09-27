import React from "react";
function NavItem(props) {
  return (
    <li className="nav-item">{props.render()}</li>
  )
}

export default NavItem