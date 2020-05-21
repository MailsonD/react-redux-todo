import {
	SET_VISIBILITY_FILTER,
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO,
	VisibilityFilters,
} from './todo.actions';

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: [],
};

function todoApp(state = initialState, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return handleSetVisibilityFilter(state, action);

		case ADD_TODO:
			return handleAddTodo(state, action);

		case TOGGLE_TODO:
			return handleToggleTodo(state, action);

		case REMOVE_TODO:
			return handleRemoveTodo(state, action);

		default:
			return state;
	}
}

function handleSetVisibilityFilter(state, action) {
	return { ...state, visibilityFilter: action.filter };
}

function handleAddTodo(state, action) {
	return {
		...state,
		todos: [
			...state.todos,
			{ text: action.text, completed: false },
		],
	};
}

function handleToggleTodo(state, action) {
	return {
		...state,
		todos: state.todos.map((todo, index) => {
			return index === action.index
				? { ...todo, completed: !todo.completed }
				: todo;
		}),
	};
}

function handleRemoveTodo(state, action) {
	return {
		...state,
		todos: state.todos.filter((todo, index) => {
			return index !== action.index;
		}),
	};
}
