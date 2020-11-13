import React from "react";
import "./Register.pages.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="input-box">
        <p className="login-title">Register</p>
        <input placeholder="Name" className="auth-input" />
        <input placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <input
          type="password"
          placeholder="Confirm Password"
          className="auth-input"
        />
        <button className="login-button">Submit</button>
      </div>
    </div>
  );
};

export default Register;
