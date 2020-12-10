import React, { useState } from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './MeetingEntry.pages.css'

const MeetingEntry = (props) => {
  const clientId = props.match.params.id
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  return (
    <>
      <Header left="agent name" middle="Meetings" right="Client" linkMiddle={`/client/${clientId}/meeting`} linkRight={`/client/${clientId}`} />
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
          <button onClick={() => {
            axios.post('/meeting', { client_id: clientId, notes, date, name })
            props.history.push(`/client/${clientId}/meeting`)
          }} className="margins-top center big login-button margins-right">Submit</button>
        </div>
      </div>
    </>
  );
};
export default withRouter(MeetingEntry);

