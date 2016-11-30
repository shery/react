import React, {Component} from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubUrl: '',
            avatarUrl: '',
        }
    }
    componentDidMount() {
        $.get(this.props.source, (result) => {
            console.log(result);
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
                <img src={this.state.avatarUrl} />
                <a href={this.state.githubUrl}>link</a>
            </div>
        );
    }
}

export default Info;