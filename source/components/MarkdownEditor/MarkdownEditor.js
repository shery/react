import React, { Component } from 'react';
import Remarkable from 'remarkable';

class MarkdownEditor extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.state = {
  //     value: 'Type some *markdown* here!'
  //   };
  // }
  // handleChange() {
  //   this.setState({ value: this.textarea.value });
  // }
  // rawMarkup() {
  //   const md = new Remarkable();
  //   return { __html: md.render(this.state.value) };
  // }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref={(c) => { this.textarea = c; }}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div className="content" dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    );
  }
}

export default MarkdownEditor;
