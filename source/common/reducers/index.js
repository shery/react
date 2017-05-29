import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';
import github from './data/githubReducers';

const rootReducer = combineReducers({
  ui,
  github
});

export default rootReducer;

// import { combineReducers } from 'redux-immutable';
// import counterReducers from './counterReducers.js'
//
// const rootReducer = combineReducers({
//   counterReducers
// });
//
// export default rootReducer;
