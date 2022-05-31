import React, {useContext} from "react"
import TodoItem from "./TodoItem"
import classes from "./Todos.module.css"

import {TodosContext} from "../store/todos-context";


// Type annotation
const Todos: React.FC = () => {
	const todosCtx = useContext(TodosContext)
	return(
		<ul className={classes.todos}>
			{todosCtx.items.map(todo => <TodoItem onRemoveTodo={todosCtx.removeTodo} key={todo.id} id={todo.id} text={todo.text} />)}
			{todosCtx.items.length > 0 ? <button onClick={todosCtx.removeAll}>Remove All Todos</button> : null}
		</ul>
	)
}

export default Todos;