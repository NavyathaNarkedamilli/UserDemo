import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import './styles.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            enableRegisterComponent: false,
            message: true
        }

    }

    renderRegister() {
        this.setState({
            enableRegisterComponent: true,
            enableLoginComponent: false,
            message: false
        })
    }

    renderLogin() {
        this.setState({
            enableLoginComponent: true,
            enableRegisterComponent: false,
            message: false
        })
    }
    render() {
        return (
            <div className="container background">
                <div className="row logindiv">
                    {this.state.message && <div className="row">
                        <div className="col-md-8">  <h3 className="header">Welcome to HomePage</h3></div></div>}
                    {!this.state.enableRegisterComponent && !this.state.enableLoginComponent ?
                        <div className="row">
                            <div>
                                <div className="col-md-2">
                                    <input type="submit" value="Click here to Login" className="btn btn-primary btn-circle" onClick={this.renderLogin.bind(this)}></input>
                                </div>
                            </div>
                            <div className="col-md-2"><input type="submit" value="Click here to Register" className="btn btn-primary btn-circle" onClick={this.renderRegister.bind(this)}></input>
                            </div>
                        </div> : ""}

                    {this.state.enableRegisterComponent && <Register />}
                    {this.state.enableLoginComponent && <Login />}
                </div>
            </div>
        )
    }

}
