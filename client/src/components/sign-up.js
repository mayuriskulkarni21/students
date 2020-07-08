import React from 'react';
import Axios from 'axios';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            added: null
        }
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        Axios.post('http://localhost:5000/api/signup', this.state)
            .then(result => {
                if (result.status === 201) {
                    this.setState({ added: true })
                }
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Sign Up</h3>
                {this.state.added && <div className="success">Sign UP successfull!</div>}
                <div className="form-group">
                    <label>Email address</label>
                    <input type="username" name="username" value={this.state.username} className="form-control" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} className="form-control" placeholder="Enter password" onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign UP</button>
                <button type="" onClick={() => this.props.history.push('/login')} className="btn btn-secondary btn-block">Sign In</button>
            </form>
        )
    }
}