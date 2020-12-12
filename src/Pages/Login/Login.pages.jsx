import React, { useState, useEffect } from "react";
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import { getUser } from '../../Redux/reducers/authReducer'
import "./Login.pages.css";

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    axios.get('/auth/me').then((res) => {
      if (res.data !== "") {
        props.history.push('/dashboard')
      }
    })
  }, [])
  return (
    <div className="login">
      <div className="input-box">
        <p className="login-title">Login</p>
        <input type="email" placeholder="Email" onChange={(e) => {
          setEmail(e.target.value)
        }} className="auth-input" />
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Password" className="auth-input" />
        <button onClick={() => {
          //axios req
          axios.post('/auth/login', { email, password }).then((res) => {
            props.getUser(res.data)
            props.history.push('/dashboard')
          }).catch((err) => {
            Swal.fire({
              icon: 'error',
              title: 'Sorry',
              text: `${err.response.data}`
            })
          })
        }} className="login-button">Submit</button>
        <a href="/register" className="link-form">Need to Register an Account?</a>
      </div>
    </div>
  );
};

export default connect(null, { getUser })(withRouter(Login));
