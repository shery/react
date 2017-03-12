import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from '../../css/bulma.css';
import Greeter from '../Greeter';
import Todo from '../Todo';
import MarkdownEditor from '../MarkdownEditor';
import Info from '../Info';

const App = () => (
  <Router>
    <div className="tabs">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/markdowneditor">MarkdownEditor</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Greeter} />
      <Route path="/todo" component={Todo} />
      <Route path="/info" component={Info} />
      <Route path="/markdowneditor" component={MarkdownEditor} />
    </div>
  </Router>
);

export default CSSModules(App, styles, { allowMultiple: true });
