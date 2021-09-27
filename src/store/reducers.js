import { ADD, COMPLETE, DELETE } from "./actions"

const defaultState = {
  todoList: [],
}

function handleADD(state, action) {
  return {
    ...state,
    todoList: state.todoList.concat([action.payload])
  }
}

function handleDelete(state, action) {
  const pos = state.todoList.findIndex((item) => item.content === action.payload.content)
  state.todoList.splice(pos, 1)
  return {
    ...state,
    todoList: [...state.todoList]
  }
}

function handleComplete(state, action) {
  const completedItem = action.payload
  const { todoList } = state
  const pos = todoList.findIndex((item) => item.content === completedItem.content)
  if (pos !== -1) {
    todoList[pos] = completedItem
    return {
      todoList: [...todoList],
    }
  }
  return state
}

function todoReducer(state = defaultState, action) {
  const { type } = action
  switch(type) {
    case ADD:
      return handleADD(state, action)
    case DELETE:
      return handleDelete(state, action)
    case COMPLETE:
      return handleComplete(state, action)
    default:
      return state
  }
}

export default todoReducer