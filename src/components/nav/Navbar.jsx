import React from "react";
import NavItem from "./NavItem";
import './style.css'

function Navbar(props) {
  return (
    <ul className="navbar">
      {props.children}
    </ul>
  )
}
Navbar.Item = NavItem
export default Navbar