import React, { useState } from 'react'
import Header from '../../Components/Header/Header.component'
import axios from 'axios'
import Swal from 'sweetalert2'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './EditAgent.pages.css'

const EditAgent = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    return (
        <>
            <Header left="agent name" middle="Dashboard" logout="Logout" linkMiddle="/dashboard" />
            <div className="edit-agent">
                <div className="client-entry">
                    <div className="editAgent input-box">
                        <p className="login-title">Agent Form</p>
                        <input placeholder="Name" onChange={(e) => {
                            setName(e.target.value)
                        }} className="auth-input" />
                        <input placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="auth-input" />
                        <button onClick={() => {
                            //axios req
                            if (email !== "" && name !== "") {
                                if (validateEmail(email)) {
                                    axios.put('/agent/update', { name, email, confirmEmail: props.auth.user.email, agentId: props.auth.user.agent_id }).then(() => {
                                        props.history.push('/')
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
                                        text: 'Invalid Email'
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
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (reduxState) => {
    return {
        auth: reduxState.auth
    }
}

export default connect(mapStateToProps)(withRouter(EditAgent))