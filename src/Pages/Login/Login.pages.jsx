import React from "react";
import { withRouter } from 'react-router-dom'
import "./Login.pages.css";

const Login = (props) => {
  return (
    <div className="login">
      <div className="input-box">
        <p className="login-title">Login</p>
        <input placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button onClick={() => {
          //axios req
          props.history.push('/dashboard')
        }} className="login-button">Submit</button>
        <a href="/register" className="link-form">Need to Register an Account?</a>
        <a href="/forgotPassword" className="link-form">Forgot your Password?</a>
      </div>
    </div>
  );
};

export default withRouter(Login);
