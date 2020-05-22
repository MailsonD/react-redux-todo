import { createReducer } from '../util/create-reducer';
import {
	SET_VISIBILITY_FILTER,
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO,
	VisibilityFilters,
} from './todo.actions';

const { SHOW_ALL } = VisibilityFilters;

/*
 * DEFINES THE INITIAL STATE
 */

const initialState = {
	visibilityFilter: SHOW_ALL,
	todos: [
		{ text: 'Aprender Redux', completed: false, id: 0 },
		{ text: 'Aprender Flexbox', completed: false, id: 1 },
	],
};

/*
 * CREATE THE REDUCERS
 */

export const todos = createReducer(initialState.todos, {
	[ADD_TODO]: addTodo,
	[TOGGLE_TODO]: toggleTodo,
	[REMOVE_TODO]: removeTodo,
});

export const visibilityFilter = createReducer(
	initialState.visibilityFilter,
	{
		[SET_VISIBILITY_FILTER]: setVisibilityFilter,
	}
);

/*
 * HANDLERS FOR THE ACTIONS
 */

function addTodo(state, action) {
	return [
		...state,
		{ text: action.text, completed: false, id: action.id },
	];
}

function toggleTodo(state, action) {
	return {
		...state,
		todos: state.todos.map((todo, index) => {
			return index === action.id
				? { ...todo, completed: !todo.completed }
				: todo;
		}),
	};
}

function removeTodo(state, action) {
	return {
		...state,
		todos: state.todos.filter((todo, index) => {
			return index !== action.id;
		}),
	};
}

function setVisibilityFilter(state, action) {
	return action.filter;
}
