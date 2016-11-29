import React from 'react';
import {render} from 'react-dom';
import Greeter from './greeter.js';
import TodoApp from './todo.js';
import MarkdownEditor from './markdowneditor.js';
import UserGithub from './info.js';



import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<TodoApp />, document.getElementById('todo'));
render(<MarkdownEditor />, document.getElementById('markdowneditor'));
render(<UserGithub source="https://api.github.com/users/shery15" />, document.getElementById('info'));
