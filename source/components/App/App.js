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
import Prompt from '../Prompt';

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      {match ? '> ' : ''}<Link to={to}>{label}</Link>
    </div>
  )}/>
);

const App = () => (
  <Router>
    <div className="tabs">
      <ul>
        <li><OldSchoolMenuLink to="/" activeOnlyWhenExact={true} label="Home" /></li>
        <li><OldSchoolMenuLink to="/topics" label="Topics" /></li>
        <li><OldSchoolMenuLink to="/info" label="Info" /></li>
        <li><OldSchoolMenuLink to="/todo" label="Todo" /></li>
        <li><OldSchoolMenuLink to="/markdowneditor" label="MarkdownEditor" /></li>
        <li><OldSchoolMenuLink to="/auth" label="AuthExample" /></li>
        <li><OldSchoolMenuLink to="/prompt" label="Prompt" /></li>
      </ul>
      <hr />
      <Route exact path="/" name="Router v4.0" component={Greeter} />
      <Route path="/topics" component={Topics} />
      <Route path="/todo" component={Todo} />
      <Route path="/info" component={Info} />
      <Route path="/markdowneditor" component={MarkdownEditor} />
      <Route path="/auth" component={AuthExample} />
      <Route path="/prompt" component={Prompt} />
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
