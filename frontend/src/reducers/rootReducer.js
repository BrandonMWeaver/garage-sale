import { combineReducers } from 'redux';
import { manageItems } from './manageItems';

export const rootReducer = combineReducers({
	items: manageItems
});
