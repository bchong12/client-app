import React from "react";
import { withRouter } from 'react-router-dom'

const ResetPassword = (props) => {
    return (
        <div className="login">
            <div className="register-input-box">
                <p className="login-title">Reset Password</p>
                <input placeholder="Code" className="auth-input" />
                <input type="password" placeholder="Password" className="auth-input" />
                <input type="password" placeholder="New Password" className="auth-input" />
                <button onClick={() => {
                    //axios req
                    props.history.push('/')
                }} className="login-button">Submit</button>
                <a href="/register" className="link-form">Register Here!</a>
                <a href="/forgotPassword" className="link-form">Login Here!</a>
            </div>
        </div>
    );
};

export default withRouter(ResetPassword)