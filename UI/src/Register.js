import React, { Component } from 'react';
import axios from 'axios';
import './styles.css';




export default class Register extends Component {

    constructor() {

        super();
        this.state = {
            requiredFields: false,
            responseSuccess: false
        }

    }
    firstNameOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            firstName: e.target.value,
            requiredFields: false
        });
    }
    lastNameOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            lastName: e.target.value,
            requiredFields: false
        })
    }

    emailOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            email: e.target.value,
            requiredFields: false
        })
    }

    passwordOnChange = (e) => {
        console.log(e.target.value);
        this.setState({
            password: e.target.value,
            requiredFields: false
        })
    }

    register = () => {
        debugger;
        if (this.state.firstName && this.state.lastName && this.state.email && this.state.password) {
            let requestObject = {

                "firstName": this.state.firstName,
                "lastName": this.state.lastName,
                "email": this.state.email,
                "password": this.state.password
            }
            axios.post("http://localhost:5234/register", requestObject).then(
                (response) => {
                    if (response.status === 200) {
                        this.setState({
                            responseSuccess: true,
                            requiredFields:false
                        });
                    }
                }
            )
        }
        else {
            this.setState({
                requiredFields: true
            })
        }
    }
    render() {
        return (
            <div> <div><h3 className="loginheader">User Registration Page</h3></div>
                <div className="container">
                    <div className="row">
                        {this.state.requiredFields && <div className="alert alert-danger alertstyle"><strong>Please input all fields</strong></div>}
                        {this.state.responseSuccess && <div className="alert alert-success alertstyle"><strong>Inserted Successfully</strong></div>}
                    </div>
                    <div className="row fontstyle">
                        <div className="col-md-3">FirstName:</div>
                        <div className="col-md-3">
                            <input type="text" name="firstName" onChange={this.firstNameOnChange}>
                            </input>
                        </div>
                    </div>
                    <br />
                    <div className="row fontstyle">
                        <div className="col-md-3">LastName:</div>
                        <div className="col-md-3">
                            <input type="text" name="lastName" onChange={this.lastNameOnChange}>
                            </input></div>
                    </div>
                    <br />
                    <div className="row fontstyle">
                        <div className="col-md-3">Email:</div>
                        <div className="col-md-3"><input type="text" name="email" onChange={this.emailOnChange}></input></div>
                    </div>
                    <br />
                    <div className="row fontstyle">
                        <div className="col-md-3">Password:</div>
                        <div className="col-md-3"><input type="password" name="password" onChange={this.passwordOnChange}></input></div>
                    </div>
                    <br />
                    <div className="row"><div className="col-md-3"></div><div className="col-md-3"><button className="btn btn-primary" type="button" onClick={this.register}>Sign Up</button></div>
                    </div>
                </div>

            </div>
        )
    }

}
