import { combineReducers } from 'redux';
import { manageCurrentUser } from './manageCurrentUser';
import { manageItems } from './manageItems';
import { manageUsers } from './manageUsers';

export const rootReducer = combineReducers({
	currentUser: manageCurrentUser,
	manageItems: manageItems,
	users: manageUsers
});
