import {combineReducers} from 'redux';
import todosReducer from './reducer-todos'

const allReducers = combineReducers({
    todos           : todosReducer,
});

export default allReducers;