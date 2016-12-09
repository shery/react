import React from 'react';
import { Link, IndexLink } from 'react-router';
import './app.css';

const App = (props) => (
  <div>
    <h1 className="web-font">中文字体测试</h1>
    <ul>
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/info" activeStyle={{ color: 'green' }}>Info</Link></li>
      <li><Link to="/todo" activeStyle={{ color: 'green' }}>Todo</Link></li>
      <li><Link to="/markdowneditor" activeStyle={{ color: 'green' }}>MarkdownEditor</Link></li>
      <li><Link to="/font" activeStyle={{ color: 'green' }}>Font</Link></li>
    </ul>
    {props.children}
  </div>
);
App.propTypes = {
  children: React.PropTypes.object
};

export default App;
