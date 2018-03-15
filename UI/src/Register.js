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
                 (response)=> {
                    if (response.status === 200) {
                        this.setState({
                            responseSucess: true
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
            <div className="maindiv">
                {this.state.requiredFields && <div className="requiredMessage">Please input all fields</div>}
                {this.state.responseSucess && <div className="requiredMessage" >Inserted Successfully.</div>}
                
                <div className="formContainer">
                    <span style={{ padding: "10px" }}>FirstName:</span><input type="text" name="firstName" onChange={this.firstNameOnChange}></input>
                    <span style={{ padding: "10px" }}>LastName:</span><input type="text" name="lastName" onChange={this.lastNameOnChange}></input>
                    <span style={{ padding: "10px" }}>Email:</span><input type="text" name="email" onChange={this.emailOnChange}></input>
                    <span style={{ padding: "10px" }}>Password:</span><input type="text" name="password" onChange={this.passwordOnChange}></input>
                    <div style={{ marginTop: "20px" }}><button type="button" onClick={this.register}>Sign Up</button></div>
                </div>
            </div >


        )
    }

}
