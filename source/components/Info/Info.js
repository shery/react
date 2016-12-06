import React, { Component } from 'react';
const element = <h1>Hello, world</h1>;
ReactDOM.render(
  element,
  document.getElementById('root')
);

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      githubUrl: '',
      avatarUrl: ''
    };
  }
  componentDidMount() {
    $.get(this.props.source, (result) => {
      const data = result;
      if (data) {
        this.setState({
          username: data.name,
          githubUrl: data.html_url,
          avatarUrl: data.avatar_url
        });
      }
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
Info.propTypes = {
  source: React.PropTypes.string
};

export default Info;
