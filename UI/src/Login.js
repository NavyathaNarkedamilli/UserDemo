import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();

        this.state = {
            loginsuccess: false,
            loginfailure: false,
            userName: this.getUserName(),
            password: this.getPassword(),
            rememberMe: false
        }
        this.getUserName = this.getUserName.bind(this);
        this.getPassword = this.getPassword.bind(this);
        this.handleRememberMe = this.handleRememberMe.bind(this);
    }

    getUserName() {
        debugger;
        let userName = localStorage.getItem("userName");
        return userName || "";
    }

    getPassword() {
        let password = localStorage.getItem("password");
        return password || "";
    }

    userNameOnChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    passwordOnchange = (e) => {

        this.setState({
            password: e.target.value
        })

    }

    handleRememberMe() {
        debugger;
        this.setState({
            rememberMe: !this.state.rememberMe
        })
    }


    login = (e) => {
        if (this.state.rememberMe) {
            debugger;
            localStorage.setItem("userName", this.state.userName)
            localStorage.setItem("password", this.state.password)
        }
        if (this.state.userName != "" && this.state.password != "") {
            axios.post("http://localhost:5234/login", {
                email: this.state.userName,
                password: this.state.password
            }).then((response) => {
                debugger;
                if (response.status === 200) {
                    if (response.data != "") {
                        console.log(response.data);
                        this.setState({
                            loginsuccess: true,
                            loginfailure: false,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName

                        });
                    }
                    else {
                        this.setState({ loginfailure: true, loginsuccess: false })
                    }
                }
            });

        }
        else {
            this.setState({
                loginfailure: true
            })
        }
    }
    render() {
        return (
            <div><h3 className="loginheader">Login Page</h3>
                <div className="container">

                    <div className="row">
                        {this.state.loginsuccess && <div className="alert alert-success alertstyle"><strong>Welcome,{this.state.firstName} {this.state.lastName}</strong></div>}
                        {this.state.loginfailure && <div className="alert alert-danger alertstyle"><strong>User Name or Password Incorrect</strong></div>}
                    </div>
                    <div className="row fontstyle">
                        <div className="col-md-2">User Name:</div>
                        <div className="col-md-2">
                            <input value={this.state.userName} type="text" name="firstName" onChange={this.userNameOnChange}></input>
                        </div>
                    </div>
                    <br />
                    <div className="row fontstyle">
                        <div className="col-md-2">Password:</div>
                        <div className="col-md-2">
                            <input value={this.state.password} type="password" name="lastName" onChange={this.passwordOnchange}></input>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row"> <div className="col-md-2"></div><div className="col-md-3 ">
                        <button type="button" className="btn btn-primary" onClick={this.login}>Login</button>
                    </div>
                    </div>
                    <br />
                    <div className="row fontstyle"><div className="col-md-2"></div><div className="col-md-3">
                        <input type="checkbox" onChange={this.handleRememberMe} unchecked></input>Remember Me
                </div>
                    </div>
                </div>
            </div>
        )
    }

}
