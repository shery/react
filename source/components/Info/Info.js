import React, { Component, PropTypes } from 'react';

function InfoUI(props) {
  return (
    props.isLoading === true
    ? <p>Loading</p>
    : <InfoName
      name={props.name}
      avatarUrl={props.avatarUrl}
      githubUrl={props.githubUrl}
    />
  );
}

function InfoName(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.avatarUrl} alt="avatar" />
      <a href={props.githubUrl}>link</a>
    </div>
  );
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
      avatarUrl: '',
      isLoading: true
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
        avatarUrl: result.avatar_url,
        isLoading: false
      });
    });
  }
  render() {
    return (
      <div>
        <InfoUI
          isLoading={this.state.isLoading}
          name={this.state.username}
          avatarUrl={this.state.avatarUrl}
          githubUrl={this.state.githubUrl}
        />
      </div>
    );
  }
}


export default Info;
