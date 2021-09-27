import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/todo-list/TodoList";
import { CompleteAC } from "../store/actions";

function HomePage({ todoList, onComplete }) {
  const handleClick = (item) => {
    onComplete(item)
  }
  return (
    <TodoList list={todoList} onToggle={handleClick} />
  )
}

function filter(arr) {
  return arr.filter((item) => item.completed === false)
}

const mapStateToProps = (state) => ({
  todoList: filter(state.todoList)
})
const mapDispatchToProps = (dispatch) => {
  const handleComplete = (item) => {
    dispatch(CompleteAC(item))
  }
  return {
    onComplete: handleComplete,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)