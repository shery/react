import React from 'react';
import { render } from 'react-dom';
import Greeter from './components/Greeter';
import Todo from './components/Todo';
import MarkdownEditor from './components/MarkdownEditor';
import Info from './components/Info';

import '../css/index.css';

render(<Greeter name="React" />, document.getElementById('root'));
render(<Todo />, document.getElementById('todo'));
render(<MarkdownEditor />, document.getElementById('markdowneditor'));
render(<Info source="https://api.github.com/users/shery15" />, document.getElementById('info'));
