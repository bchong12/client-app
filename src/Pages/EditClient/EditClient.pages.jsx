import React, { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './EditClient.pages.css'

const EditClient = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [clientId, setClientId] = useState('')

    useEffect(() => {
        axios.get(`/client/${props.match.params.id}`).then((res) => {
            const client = res.data[0]
            setName(client.name)
            setEmail(client.email)
            setPhoneNumber(client.phone_number)
            setClientId(client.client_id)
        })
    }, [])
    return (
        <>
            <Header left="agent name" middle="Dashboard" right="Forms Page" linkMiddle="/dashboard" linkRight={`/client/${clientId}/application`} />
            <div className="edit-agent">
                <div className="client-entry">
                    <div className="editClient input-box">
                        <p className="login-title">Client Form</p>
                        <input placeholder="Name" onChange={(e) => {
                            setName(e.target.value)
                            console.log(name)
                        }} value={name} className="auth-input" />
                        <input placeholder="Email" value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} className="auth-input" />
                        <input placeholder="Phone Number" value={phoneNumber} onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} className="auth-input" />
                        <button onClick={() => {
                            //axios req
                            axios.put('/client', { name, email, phoneNumber, clientId }).then(() => {
                                props.history.push(`/client/${clientId}`)
                            })
                        }} className="login-button">Submit</button>
                        <button onClick={() => {
                            axios({
                                url: '/client',
                                method: 'delete',
                                data: { clientId }
                            }).then(() => {
                                props.history.push(`/dashboard`)
                            })
                        }} className="login-button">Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(EditClient)