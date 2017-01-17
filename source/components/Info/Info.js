import React, { Component } from 'react';

class Info extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: 'shery',
  //     githubUrl: '',
  //     avatarUrl: ''
  //   };
  // }
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
