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
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      login: '',
      username: '',
      githubUrl: '',
      avatarUrl: '',
      isLoading: true
    };
  }
  // componentDidMount() {
  //   this.getInfo();
  // }
  onChange(e) {
    this.setState({ login: e.target.value });
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
    $.get('https://api.github.com/users/' + this.state.login, (result) => {
      this.setState({
        username: result.name,
        githubUrl: result.html_url,
        avatarUrl: result.avatar_url,
        isLoading: false
      });
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isLoading: true
    });
    this.getInfo();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.login} />
          <button>search</button>
        </form>
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
