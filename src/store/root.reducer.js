import { combineReducers } from 'redux';

import * as todoReducers from './todo/todo.reducer';

const rootReducer = combineReducers(todoReducers);

export default rootReducer;
