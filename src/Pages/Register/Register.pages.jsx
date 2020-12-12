import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import "./Register.pages.css";

const Register = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  useEffect(() => {
    axios.get('/auth/me').then((res) => {
      if (res.data.email !== "admin@admin.com") {
        props.history.push('/')
      }
    })
  }, [])

  return (
    <div className="register">
      <div className="register-input-box">
        <p className="login-title">Register</p>
        <input placeholder="Name" onChange={(e) => {
          setName(e.target.value)
        }} className="auth-input" />
        <input placeholder="Email" onChange={(e) => {
          setEmail(e.target.value)
        }} className="auth-input" />
        <input type="password" onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="Password" className="auth-input" />
        <input
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value)
          }}
          placeholder="Confirm Password"
          className="auth-input"
        />
        <button onClick={() => {
          //axios req
          if (name !== "" && password !== "" && email !== "" && confirmPassword !== "") {
            if (validateEmail(email)) {
              axios.post('/auth/register', { name, email, password, confirmPassword }).then(() => {
                props.history.push('/dashboard')
              }).catch((err) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Sorry',
                  text: `${err.response.data}`
                })
              })
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Sorry',
                text: 'Please enter a valid email'
              })
            }
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Sorry',
              text: 'Please do not leave any fields blank'
            })
          }
        }} className="login-button">Submit</button>

        <button onClick={() => {
          //axios req
          axios.post('/auth/logout').then(() => {
            props.history.push('/')
          })
        }} className="login-button">Logout</button>
      </div>
    </div>
  );
};

export default withRouter(Register);
