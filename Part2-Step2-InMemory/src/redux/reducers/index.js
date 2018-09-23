import {combineReducers} from 'redux';

import todosReducer from './reducer-todos'


/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * The entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
   
    todos           : todosReducer,
    
});

export default allReducers;