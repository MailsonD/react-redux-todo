/*
 * action types
 */

let nextTodoId = 2;

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER =
	'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action creators
 */

export function addTodo(text) {
	return { type: ADD_TODO, text, id: nextTodoId++ };
}

export function toggleTodo(id) {
	return { type: TOGGLE_TODO, id };
}

export function removeTodo(id) {
	return { type: REMOVE_TODO, id };
}

export function setVisibilityFilter(filter) {
	return { type: SET_VISIBILITY_FILTER, filter };
}
/*
 * export action types
 */

export { ADD_TODO, REMOVE_TODO, TOGGLE_TODO };
