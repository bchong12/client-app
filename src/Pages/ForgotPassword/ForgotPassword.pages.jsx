import React from "react";
import { withRouter } from 'react-router-dom';
import './ForgotPassword.pages.css'

const ForgotPassword = (props) => {
    return (
        <div className="forgotPassword">
            <div className="forgot input-box">
                <p className="login-title">Forgot Password</p>
                <input placeholder="Email" className="auth-input" />
                <button onClick={() => {
                    //axios req
                    props.history.push('/resetPassword')
                }} className="login-button">Submit</button>
                <a href="/login" className="link-form">Login with your found Password</a>
                <a href="/register" className="link-form">Need to Register an Account?</a>
            </div>
        </div>
    );
};

export default withRouter(ForgotPassword);