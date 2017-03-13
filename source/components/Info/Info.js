import React, { Component } from 'react';

class Info extends Component {
  constructor(props) {
    super(props);
    this.getInfo = this.getInfo.bind(this);
    this.state = {
      username: '',
      githubUrl: '',
      avatarUrl: ''
    };
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo() {
    // fetch('https://api.github.com/users/shery15').then((response) => {
    //   const info = response.json();
    //   this.setState({
    //     username: info.name,
    //     githubUrl: info.html_url,
    //     avatarUrl: info.avatar_url
    //   });
    // }).then(data => console.log(data))
    //   .catch(e => console.log('Oops, error', e));
    $.get('https://api.github.com/users/shery15', (result) => {
      this.setState({
        username: result.name,
        githubUrl: result.html_url,
        avatarUrl: result.avatar_url
      });
    });
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
// Info.propTypes = {
//   source: React.PropTypes.string
// };

export default Info;
