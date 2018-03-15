import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import './styles.css';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            enableRegisterComponent: false,
            message:true
        }

    }

    renderRegister() {
        this.setState({
            enableRegisterComponent: true,
            enableLoginComponent: false,
            message:false
        })
    }

    renderLogin() {
        this.setState({
            enableLoginComponent: true,
            enableRegisterComponent: false,
            message:false
        })
    }
    render() {
        return (
            <div className="maindiv">
                {this.state.message && <div style={{ font: "16px", color: "gray" }}>Click here to Login/Register</div>}
                {!this.state.enableRegisterComponent && !this.state.enableLoginComponent ?
                    <div><input type="submit" value="Login" className="buttonstyle" onClick={this.renderLogin.bind(this)}></input>
                        <input type="submit" value="Register" className="buttonstyle" onClick={this.renderRegister.bind(this)}></input></div> : ""}

                {this.state.enableRegisterComponent && <Register />}
                {this.state.enableLoginComponent && <Login />}

            </div>
        )
    }

}
