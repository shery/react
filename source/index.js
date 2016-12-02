import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import Greeter from './components/Greeter';
import Todo from './components/Todo';
import MarkdownEditor from './components/MarkdownEditor';
import Info from './components/Info';

import './css/index.css';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Greeter} />
      <Route path="/todo" component={Todo} />
      <Route path="/info" component={Info} />
      <Route path="/markdowneditor" component={MarkdownEditor} />
    </Route>
  </Router>,
  document.getElementById('app'));
// render(<Greeter name="React" />, document.getElementById('root'));
// render(<Todo />, document.getElementById('todo'));
// render(<MarkdownEditor />, document.getElementById('markdowneditor'));
// render(<Info source="https://api.github.com/users/shery15" />, document.getElementById('info'));
