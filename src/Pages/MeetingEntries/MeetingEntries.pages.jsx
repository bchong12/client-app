import React, { useEffect, useState } from "react";
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import "./MeetingEntries.pages.css";
import Header from '../../Components/Header/Header.component'

const MeetingEntries = (props) => {
  const clientId = props.match.params.id
  const [meetings, setMeetings] = useState([])
  const [meetingsCopy, setMeetingsCopy] = useState([])
  const [meetingsCopy2, setMeetingsCopy2] = useState('')

  useEffect(() => {
    axios.get(`/meetings/${clientId}`).then((res) => {
      setMeetings(res.data)
      setMeetingsCopy(res.data)
      setMeetingsCopy2(res.data)
    })
  }, [])

  return (
    <div className="meeting-entries">
      <Header left="agent name" middle="New Meeting" right="Client" linkMiddle={`/client/${clientId}/meeting/new`} linkRight={`/client/${clientId}`} />
      <input className="iae-search search-box" onChange={(e) => {
        if (e.target.value === "") {
          setMeetings(meetingsCopy)
        } else {
          const newMeetings = meetingsCopy.filter((el) => {
            return el.name.includes(e.target.value)
          })
          setMeetings(newMeetings)
          setMeetingsCopy(meetingsCopy2)
        }
      }} placeholder="Search" />
      <div className="insurance-application-entries">
        <div className="client-entries-box">
          {meetings.map((el, i) => {
            return <div onClick={() => {
              props.history.push(`/client/${el.client_id}/meeting/${el.meeting_id}`)
            }} className="client-one">
              <img className="client-icon" src="https://img.icons8.com/fluent-systems-filled/344/meeting.png" />
              <p className="client-name-entries">{el.name}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MeetingEntries)
