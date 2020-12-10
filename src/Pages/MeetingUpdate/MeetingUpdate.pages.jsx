import React, { useEffect, useState } from "react";
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import Header from '../../Components/Header/Header.component'
import { connect } from 'react-redux'
import './MeetingUpdate.pages.css'

const MeetingUpdate = (props) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  useEffect(() => {
    axios.get(`/meeting/${props.match.params.meetingId}`).then((res) => {
      setName(res.data[0].name)
      setDate(res.data[0].date)
      setNotes(res.data[0].notes)
    })
  }, [])

  return (
    <>
      <Header left="agent name" middle="Meetings" right="Client" linkMiddle={`/client/${props.match.params.id}/meeting`} linkRight={`/client/${props.match.params.id}`} />
      <div className="meeting-entry">
        <div className="meeting-input-box">
          <p className="margins-top form-title">Meeting Notes</p>
          <div className="flex margins-top insurance-entry-row">
            <div className="flex-row">
              <p>Name</p>
              <input defaultValue={name} onChange={(e) => {
                setName(e.target.value)
              }} className="mls insurance-form-input" />
            </div>
          </div>
          <div className="flex insurance-entry-row">
            <div className="flex-row">
              <p>Date</p>
              <input defaultValue={date} onChange={(e) => {
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
            }} defaultValue={notes} className="text insurance-form-ta" />
          </div>
          <div className="margins-top margin-right">
            <button onClick={() => {
              axios.put('/meeting', { meeting_id: props.match.params.meetingId, name, date, notes }).then(() => {
                props.history.push(`/client/${props.match.params.id}/meeting`)
              })
            }} className="mls thick login-button">Submit</button>
            <button onClick={() => {
              axios.post('/meeting/email', { name, date, notes, email: props.auth.user.email })
              axios.put('/meeting', { meeting_id: props.match.params.meetingId, name, date, notes }).then(() => {
                props.history.push(`/client/${props.match.params.id}/meeting`)
              })
            }} className="mls thick login-button">Email</button>
            <button onClick={() => {
              axios({
                url: '/meeting',
                method: 'delete',
                data: { meeting_id: props.match.params.meetingId }
              }).then(() => {
                props.history.push(`/client/${props.match.params.id}/meeting`)
              })
            }} className="mls thick login-button">Delete</button>
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

export default connect(mapStateToProps)(withRouter(MeetingUpdate));
