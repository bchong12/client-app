import React from 'react'
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import './EditClient.pages.css'

const EditClient = (props) => {
    return (
        <>
            <Header left="agent name" middle="Dashboard" right="Client" linkMiddle="/dashboard" linkRight="/client/1" />
            <div className="edit-agent">
                <div className="client-entry">
                    <div className="editClient input-box">
                        <p className="login-title">Client Form</p>
                        <input placeholder="Name" className="auth-input" />
                        <input placeholder="Email" className="auth-input" />
                        <input placeholder="Phone Number" className="auth-input" />
                        <button onClick={() => {
                            //axios req
                            props.history.push('/dashboard')
                        }} className="login-button">Submit</button>
                        <button className="login-button">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(EditClient)