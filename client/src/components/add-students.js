import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addStudent } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class AddStudents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dob: new Date(),
            firstname: '',
            lastname: '',
            fathername: '',
            username: '',
            address: '',
            mobile: null,
            gender: ''
        }
    }

    handleDateChange(date) {
        this.setState({ dob: date });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRadio(e) {
        e.preventDefault();
        this.setState({ gender: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addStudent(this.state);
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstname" value={this.state.firstname} className="form-control" placeholder="Enter firstname" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastname" value={this.state.lastname} className="form-control" placeholder="Enter lastname" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Father Name</label>
                    <input type="text" name="fathername" value={this.state.fathername} className="form-control" placeholder="Enter father's name" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="username" value={this.state.username} className="form-control" placeholder="Enter email" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <textarea type="text" name="address" value={this.state.address} className="form-control" placeholder="Enter address" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Mobile No.</label>
                    <input type="number" name="mobile" value={this.state.mobile} className="form-control" placeholder="Enter mobile" onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" checked={this.state.gender === "male"} type="radio" name="exampleRadios" id="exampleRadios1" value="male" onClick={(e) => this.handleRadio(e)} />
                        <label class="form-check-label" for="exampleRadios1">Male</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" checked={this.state.gender === "female"} type="radio" name="exampleRadios" id="exampleRadios2" value="female" onClick={(e) => this.handleRadio(e)} />
                        <label class="form-check-label" for="exampleRadios2">Female</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Date Of Birth</label>
                    <DatePicker selected={this.state.dob} onChange={(e) => this.handleDateChange(e)} />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend" for="inputGroupSelect01"></div>
                        <select class="custom-select" id="inputGroupSelect01" onChange={(e) => this.handleChange(e)}>
                            <option selected>Choose...</option>
                            <option value="Australia">Australia</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Canada">Canada</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Egypt">Egypt</option>
                            <option value="Greece">Greece</option>
                            <option value="India">India</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addStudentData: state.formReducer.addStudent
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addStudent: bindActionCreators(addStudent, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddStudents);