import React from 'react'
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import './EditAgent.pages.css'

const EditAgent = (props) => {
    return (
        <>
            <Header left="agent name" middle="Dashboard" logout="Logout" linkMiddle="/dashboard" />
            <div className="edit-agent">
                <div className="client-entry">
                    <div className="editAgent input-box">
                        <p className="login-title">Agent Form</p>
                        <input placeholder="Name" className="auth-input" />
                        <input placeholder="Email" className="auth-input" />
                        <button onClick={() => {
                            //axios req
                            props.history.push('/')
                        }} className="login-button">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(EditAgent)