import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'shery',
      githubUrl: 'https://github.com/shery15',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/12773365?v=3'
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.username}</h3>
        <img src={this.state.avatarUrl} alt="avatar" />
        <a href={this.state.githubUrl}>link</a>
      </div>
    );
  }
}
Info.propTypes = {
  source: React.PropTypes.string
};

export default Info;
