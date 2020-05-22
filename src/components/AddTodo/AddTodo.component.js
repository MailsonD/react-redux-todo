import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todo/todo.actions';

function AddTodo() {
	const [todo, setTodo] = useState('');
	const dispatch = useDispatch();

	function handleAddTodo() {
		dispatch(addTodo(todo));
	}

	return (
		<div>
			<input
				type='text'
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button onClick={handleAddTodo}>Adicionar</button>
		</div>
	);
}

export default AddTodo;
