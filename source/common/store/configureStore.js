// import { createStore, applyMiddleware } from 'redux';
// import reduxThunk from 'redux-thunk';
// // import createLogger from 'redux-logger';
// import Immutable from 'immutable';
// import rootReducer from '../reducers';
//
// const initialState = Immutable.Map();
//
// export default createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(reduxThunk)
//   // applyMiddleware(reduxThunk, createLogger({ stateTransformer: state => state.toJS() }))
// );

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(createLogger({ stateTransformer: state => state.toJS() }), thunk)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
