import React, { useState } from "react";
import { connect } from "react-redux";
import { AddAC } from "../../store/actions";
import './style.css'

function control(props, ref) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState('')
  const handleEnter = (e) => {
    if (e.code === 'Enter' && value.trim() !== '') {
      props.onAdd({
        completed: false,
        content: value
      })
      setValue('')
    }
  }
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className="todo-control">
      <div className="todo-input">
        <input
          value={value}
          ref={ref}
          onChange={handleChange}
          onKeyPress={handleEnter}
          type="text"
          className="todo-input-inner"
          placeholder="enter notes..." />
      </div>
    </div>
  )
}

const TodoControl = React.forwardRef(control)

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAdd: (item) => {
      dispatch(AddAC(item))
    },
  }
}
export default connect(() => ({}), mapDispatchToProps)(TodoControl)