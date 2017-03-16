import { combineReducers } from 'redux-immutable';
// import ui from './ui/uiReducers.js';
import todo from './data/todoReducers.js';

const rootReducer = combineReducers({
  todo
});

export default rootReducer;
