import React from "react"
import TodoItem from "./todo-item/TodoItem"
import './style.css'

function TodoList(props) {
  const { list, onToggle } = props
  const toggle = (item, index) => {
    onToggle(item, index)
  }
  return (
    <ul className="todo-ui">
      {list.map((item, index) => (
        <TodoItem 
          key={index} 
          item={item} 
          onClick={toggle}
        />
      ))}
    </ul>
  )
}

export default TodoList