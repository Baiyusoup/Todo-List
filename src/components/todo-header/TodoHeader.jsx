import React from "react";
import './todo-header.css'

function TodoHeader(props) {
  return (
    <header className="todo-header">
      <h2>{props.title}</h2>
      <h6>{props.subTitle}</h6>
      {props.children}
    </header>
  )
}

export default TodoHeader