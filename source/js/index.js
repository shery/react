import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter.js';
import TodoApp from './Todo.js';
import MarkdownEditor from './MarkdownEditor.js';
import UserGithub from './Info.js';



import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<TodoApp />, document.getElementById('todo'));
render(<MarkdownEditor />, document.getElementById('markdowneditor'));
render(<UserGithub source="https://api.github.com/users/shery15" />, document.getElementById('info'));
