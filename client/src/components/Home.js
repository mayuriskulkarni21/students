import React from 'react';
import { userService } from '../_services/userService';
import { authenticationService } from '../_services/authentication.service';
import { connect } from 'react-redux';

class ViewStudents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            users: null
        };
    }

    componentDidMount() {
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { currentUser, users } = this.state;
        const { addStudentData } = this.props;
        return (
            <div>
                <h1>Hi {currentUser.firstName}!</h1>
                <p>You're logged in with React & JWT!!</p>
                {
                    addStudentData.length > 0 ?
                        <ul>
                            {addStudentData.map(user =>
                                <li key={user.id}>{user.firstname} {user.lastname}</li>
                            )}
                        </ul>
                        :
                        <div>Student data not added!</div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        addStudentData: state.formReducer.addStudent
    }
}

export default connect(
    mapStateToProps
)(ViewStudents);
