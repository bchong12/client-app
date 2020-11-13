import React from "react";
import "./Login.pages.css";

const Login = () => {
  return (
    <div className="login">
      <div className="input-box">
        <p className="login-title">Login</p>
        <input placeholder="Email" className="auth-input" />
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="login-button">Submit</button>
      </div>
    </div>
  );
};

export default Login;
