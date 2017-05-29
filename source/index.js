/**
 *  todo APP
 */
// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import Main from './components/Main';
// import store from './store';
//
//
// render(
//   <Provider store={store}>
//     <Main />
//   </Provider>, document.getElementById('root'));

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
  // Switch,
  // Link
} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './common/components/Main';
import HomePageContainer from './containers/HomePageContainer';
import ResultPageContainer from './containers/ResultPageContainer';
import store from './store';

injectTapEventPlugin();

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Main />
          {/* <Route component={HomePageContainer} /> */}
          {/* <ResultPageContainer /> */}
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
