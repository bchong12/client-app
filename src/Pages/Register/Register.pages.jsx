import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import "./Register.pages.css";

const Register = (props) => {
  return (
    <div className="register">
      <div className="register-input-box">
        <p className="login-title">Register</p>
        <input placeholder="Name" className="auth-input" />
        <input placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-input"
        />
        <button onClick={() => {
          //axios req
          props.history.push('/dashboard')
        }} className="login-button">Submit</button>

        <a href="/login" className="link-form">Already have an account?</a>
      </div>
    </div>
  );
};

export default withRouter(Register);
