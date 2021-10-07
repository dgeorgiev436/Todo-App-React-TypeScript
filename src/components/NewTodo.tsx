import {useRef, useContext} from "react"
import classes from "./NewTodo.module.css"

import {TodosContext} from "../store/todos-context";

const NewTodo: React.FC = () => {
	const todoRef = useRef<HTMLInputElement>(null)
	const todosCtx = useContext(TodosContext);
	
	
	const submitFormHandler = (event: React.FormEvent) => {
		event.preventDefault()
		
		const enteredText = todoRef.current!.value
		
		if(enteredText.trim().length === 0) {
// 			Throw an error
			return;
		}
		
		todosCtx.addTodo(enteredText)
	}
	
	return(
		<form className={classes.form} onSubmit={submitFormHandler}>
			<label htmlFor="todo">Enter Todo:</label>
			<input ref={todoRef} type="text" id="todo" placeholder="Enter Todo"></input>
			<button>Add Todo</button>
		</form>
	)
}

export default NewTodo
