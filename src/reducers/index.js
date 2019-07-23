import { combineReducers } from 'redux';
import LibraryReducer from '../reducers/LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer,
    
});