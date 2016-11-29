import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter.jsx';
import Todo from './Todo.jsx';
import MarkdownEditor from './MarkdownEditor.jsx';
import Info from './Info.jsx';



import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<Todo />, document.getElementById('todo'));
render(<MarkdownEditor />, document.getElementById('markdowneditor'));
render(<Info source="https://api.github.com/users/shery15" />, document.getElementById('info'));
