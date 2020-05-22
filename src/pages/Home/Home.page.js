import React from 'react';
import TodoList from '../../components/TodoList/TodoList.component';
import AddTodo from '../../components/AddTodo/AddTodo.component';

const Home = () => {
	return (
		<div>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default Home;
