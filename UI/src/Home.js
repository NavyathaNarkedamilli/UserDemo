import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import './styles.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            enableRegisterComponent: false,
            enableLoginComponent: false,
            homeComponent: true,
            message: true
        }
        this.handleLoginBack = this.handleLoginBack.bind(this);

    }

    renderRegister() {
        this.setState({
            enableRegisterComponent: true,
            enableLoginComponent: false,
            homeComponent: false,
            message: false
        })
    }

    handleLoginBack() {
        this.setState({
            enableRegisterComponent: false,
            enableLoginComponent: false,
            homeComponent: true,
            message: true
        })
    }

    renderLogin() {
        this.setState({
            enableLoginComponent: true,
            enableRegisterComponent: false,
            homeComponent: false,
            message: false
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row logindiv">
                    {this.state.message && <div className="row">
                        <div className="col-md-8">  <h3 className="loginheader">Welcome to HomePage</h3></div></div>}
                    {this.state.homeComponent &&
                        <div className="row">
                            <div>
                                <div className="col-md-4">
                                    <input type="submit" value="Click here to Login" className="btn btn-primary btn-circle" onClick={this.renderLogin.bind(this)}></input>
                                </div>
                            </div>
                            <div className="col-md-4"><input type="submit" value="Click here to Register" className="btn btn-primary btn-circle" onClick={this.renderRegister.bind(this)}></input>
                            </div>
                        </div>}

                    {this.state.enableRegisterComponent && <Register handleLoginBack={this.handleLoginBack} />}
                    {this.state.enableLoginComponent && <Login handleLoginBack={this.handleLoginBack} />}
                </div>
            </div>
        )
    }

}
