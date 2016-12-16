import React from 'react';
import { Link, IndexLink } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from '../../css/bulma.css';

const App = (props) => (
  <div className="tabs">
    <ul>
      <li><IndexLink to="/">HOME</IndexLink></li>
      <li><Link to="/info">Info</Link></li>
      <li><Link to="/todo">Todo</Link></li>
      <li><Link to="/markdowneditor">MarkdownEditor</Link></li>
      <li><Link to="/font">Font</Link></li>
    </ul>
    {props.children}
  </div>
);
App.propTypes = {
  children: React.PropTypes.object
};

export default CSSModules(App, styles, { allowMultiple: true });
