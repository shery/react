import React from 'react';
import { render } from 'react-dom';
import Greeter from './Greeter.js';
import Todo from './Todo.js';
// import MarkdownEditor from './MarkdownEditor.js';
import Info from './Info.js';

import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<Todo />, document.getElementById('todo'));
// render(<MarkdownEditor />, document.getElementById('markdowneditor'));
render(<Info source="https://api.github.com/users/shery15" />, document.getElementById('info'));
