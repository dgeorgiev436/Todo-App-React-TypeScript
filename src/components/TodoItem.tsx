import Todo from "../models/todo"
import React from "react"
import classes from "./TodoItem.module.css"

const TodoItem: React.FC<{id: string; text: string; onRemoveTodo: (id: string) => void}> = (props) => {
	
	const removeTodoOnClickHandler = () => {
		props.onRemoveTodo(props.id)
	}
	
	return(
		<li onClick={removeTodoOnClickHandler} className={classes.item}>{props.text}</li>
	)
}

export default TodoItem