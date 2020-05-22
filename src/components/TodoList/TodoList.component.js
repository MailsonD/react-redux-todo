import React from 'react';
import Todo from '../Todo/Todo.component';

const TodoList = ({ todos, onTodoClick }) => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<Todo
					key={index}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			))}
		</ul>
	);
};

export default TodoList;
