import { combineReducers } from 'redux';
import LibraryReducer from '../reducers/LibraryReducer';
import SelectLibraryReducer from './SelectLibraryReducer';


export default combineReducers({
    libraries: LibraryReducer,
    selectLibraryId: SelectLibraryReducer
    
});