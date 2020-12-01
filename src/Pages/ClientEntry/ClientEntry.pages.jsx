import React from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import "./ClientEntry.pages.css";

const ClientEntry = (props) => {
  return (
    <>
      <Header left="agent name" r="" middle="Dashboard" logout="Logout" linkMiddle="/dashboard" />
      <div className="client-entry">
        <div className="input-box">
          <p className="login-title">Client Form</p>
          <input placeholder="Name" className="auth-input" />
          <input placeholder="Email" className="auth-input" />
          <input placeholder="Phone Number" className="auth-input" />
          <button onClick={() => {
            //axios req
            props.history.push('/dashboard')
          }} className="login-button">Submit</button>

        </div>
      </div>
    </>
  );
};
export default withRouter(ClientEntry);
