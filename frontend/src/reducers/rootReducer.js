import { combineReducers } from 'redux';
import { manageItems } from './manageItems';
import { manageUsers } from './manageUsers';

export const rootReducer = combineReducers({
	items: manageItems,
	users: manageUsers
});
