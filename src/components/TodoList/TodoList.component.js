import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo.component';

const TodoList = ({ onTodoClick }) => {
	const todos = useSelector((state) => state.todos);

	return (
		<ul>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			))}
		</ul>
	);
};

export default TodoList;
