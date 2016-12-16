import React from 'react';
import { Link, IndexLink } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from 'bulma';


const App = (props) => (
  <div styleName="tabs">
    <ul>
      <li><IndexLink to="/" activeClassName="is-active">Home</IndexLink></li>
      <li><Link to="/info" activeStyle="is-active">Info</Link></li>
      <li><Link to="/todo" activeStyle="is-active">Todo</Link></li>
      <li><Link to="/markdowneditor" activeStyle="is-active">MarkdownEditor</Link></li>
      <li><Link to="/font" activeStyle="is-active">Font</Link></li>
    </ul>
    {props.children}
  </div>
);
App.propTypes = {
  children: React.PropTypes.object
};

export default CSSModules(App, styles, { allowMultiple: true });
