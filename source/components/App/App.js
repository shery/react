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
import AuthExample from '../Login';


const App = () => (
  <Router>
    <div className="tabs">
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/info">Info</Link></li>
        <li><Link to="/todo">Todo</Link></li>
        <li><Link to="/markdowneditor">MarkdownEditor</Link></li>
        <li><Link to="/auth">AuthExample</Link></li>
      </ul>
      <hr />
      <Route exact path="/" render={() => <Greeter name="Router v4.0" />} />
      <Route path="/topics" component={Topics} />
      <Route path="/todo" component={Todo} />
      <Route path="/info" component={Info} />
      <Route path="/markdowneditor" component={MarkdownEditor} />
      <Route path="/auth" component={AuthExample} />
    </div>
  </Router>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/component`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default CSSModules(App, styles, { allowMultiple: true });
