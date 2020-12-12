import React, { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import "./ClientEntry.pages.css";

const ClientEntry = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  return (
    <>
      <Header left="agent name" r="" middle="Dashboard" logout="Logout" linkMiddle="/dashboard" />
      <div className="client-entry">
        <div className="client-input input-box">
          <p className="login-title">Client Form</p>
          <input placeholder="Name" onChange={(e) => {
            setName(e.target.value)
          }} className="auth-input" />
          <button onClick={() => {
            //axios req
            axios.post('/client', { name, email, phoneNumber, agentId: props.auth.user.agent_id }).then(() => {
              axios.get('/clientsAll',).then((res) => {
                props.history.push(`/client/${res.data[0].client_id}/application`)
              })
            })
          }} className="login-button">Submit</button>

        </div>
      </div>
    </>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.auth
  }
}

export default connect(mapStateToProps)(withRouter(ClientEntry));
