import React, { Component, PropTypes } from 'react';

function InfoName(props) {
  return <h3>{props.name}</h3>;
}
InfoName.defaultProps = {
  name: 'shery15'
};
InfoName.propTypes = {
  name: PropTypes.string.required
};

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
        <InfoName name={this.state.username} />
        <img src={this.state.avatarUrl} alt="avatar" />
        <a href={this.state.githubUrl}>link</a>
      </div>
    );
  }
}


export default Info;
