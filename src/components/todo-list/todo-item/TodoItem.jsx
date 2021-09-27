import React from "react";
import classNames from "classnames";

// function TodoItem1(props) {
//   const { item, onClick } = props
//   const [checked, setCheck] = useState(false)
//   const handleToggle = (e) => {
//     setCheck(!checked)
//     onClick({ ...item, isComplete: !item.isComplete })
//   }
//   const classs = classNames({
//     'todo-item': true,
//     'active': checked
//   })
//   return (
//     <li
//       onClick={handleToggle}
//       className={classs}>
//       <input onChange={handleToggle} checked={checked} type="checkbox" name={item.content}/>
//       <span>{item.content}</span>
//     </li>
//   )
// }

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: props.item.completed
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
    const { item, onClick } = this.props
    const payload = Object.assign({}, item, { completed: !item.completed })
    this.setState({
      checked: payload.completed
    })
    onClick(payload)
  }
  render() {
    const classs = classNames({
      'todo-item': true,
      'active': this.state.checked
    })
    return (
      <li
        onClick={this.handleToggle}
        className={classs}>
        <input 
          type="checkbox"
          onChange={this.handleToggle} 
          checked={this.state.checked} 
        />
        <span>{this.props.item.content}</span>
      </li>
    )
  }
}

export default TodoItem