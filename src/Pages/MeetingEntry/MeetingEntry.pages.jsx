import React, { useState } from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import './MeetingEntry.pages.css'

const MeetingEntry = (props) => {
  const clientId = props.match.params.id
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  return (
    <>
      <Header left="agent name" right="Forms Page" linkRight={`/client/${clientId}/application`} />
      <div className="meeting-entry">
        <div className="meeting-input-box">
          <p className="margins-top form-title">Meeting Notes</p>
          <div className="flex margins-top insurance-entry-row">
            <div className="flex-row">
              <p>Name</p>
              <input onChange={(e) => {
                setName(e.target.value)
              }} className="mls insurance-form-input" />
            </div>
          </div>
          <div className="flex insurance-entry-row">
            <div className="flex-row">
              <p>Date</p>
              <input onChange={(e) => {
                setDate(e.target.value)
              }} className="mls insurance-form-input" />
            </div>
          </div>
          <div className="flex insurance-entry-row">
            <p>Notes</p>
          </div>
          <div className="flex insurance-entry-row">
            <textarea onChange={(e) => {
              setNotes(e.target.value)
            }} className="text insurance-form-ta" />
          </div>
          <div className="button-group">
            <button onClick={() => {
              axios.post('/meeting', { client_id: clientId, notes, date, name })
              props.history.push(`/client/${clientId}/application`)
            }} className=" bro margins-top login-button">Save</button>
            <button onClick={() => {
              axios.post('/meeting/email', { name, date, notes, email: props.auth.user.email })
              axios.post('/meeting', { client_id: clientId, name, date, notes }).then(() => {
                props.history.push(`/client/${props.match.params.id}/application`)
              })
            }} className=" bro login-button">Email</button>
          </div>

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

export default connect(mapStateToProps)(withRouter(MeetingEntry))

