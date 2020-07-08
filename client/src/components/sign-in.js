import React from 'react';
import { authenticationService } from '../_services/index';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        if (authenticationService.currentUserValue) {
            this.props.history.push('/');
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const { username, password } = this.state;
        authenticationService.login(username, password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    console.log("from:", from)
                    this.props.history.push(from);
                },
                error => {
                }
            );
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="username" value={this.state.username} className="form-control" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                <button type="" onClick={() => this.props.history.push('/signup')} className="btn btn-secondary btn-block">Sign UP</button>
            </form>
        )
    }
}