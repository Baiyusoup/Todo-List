import React from "react";
import { connect } from "react-redux";
import TodoList from "../components/todo-list/TodoList";
import { DeleteAC } from "../store/actions";

function CompletePage({ completedList, onDelete }) {
  const handleClick = (item, index) => {
    console.log(item);
  }
  return (
    <TodoList list={completedList} onToggle={handleClick} />
  )
}

const mapStateToProps = (state) => ({
  completedList: state.todoList.filter((item) => item.completed)
})
const mapDispatchToProps = (dispatch) => {
  const handle = (item) => {
    dispatch(DeleteAC(item))
  }
  return {
    onDelete: handle
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompletePage)