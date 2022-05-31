import React from "react"
import Todo from "../models/todo"
import {useState} from "react"


type TodosContextObject = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
	removeAll: () => void
}


export const TodosContext = React.createContext<TodosContextObject>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
	removeAll: () => {}
})


const TodosContextProvider: React.FC = (props) => {
	
	const [todos, setTodos] = useState<Todo[]>([]);
	
	
	const addTodoHandler = (addedTodo: string) => {
		console.log(addedTodo)
		const newTodo = new Todo(addedTodo)
		
		setTodos(prevTodos => {
			return prevTodos.concat(newTodo)
		})
	}

	const removeAllHandler = () => {
		setTodos([]);
	}
	
	const removeTodoHandler = (id: string) => {
		
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id)
		})
	}
	
	const contextValue: TodosContextObject = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
		removeAll: removeAllHandler
	}
	
	
	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	)
}

export default TodosContextProvider;