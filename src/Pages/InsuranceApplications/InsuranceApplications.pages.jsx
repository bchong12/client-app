import React, { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.component'
import "./InsuranceApplication.pages.css";
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const InsuranceApplicationEntries = (props) => {
  const clientId = props.match.params.id
  const [applicationsArr, setApplicationsArr] = useState([])
  const [applicationsArrCopy, setApplicationsArrCopy] = useState([])
  const [applicationsArrCopy2, setApplicationsArrCopy2] = useState('')
  const [meetings, setMeetings] = useState([])
  const [meetingsCopy, setMeetingsCopy] = useState([])
  const [meetingsCopy2, setMeetingsCopy2] = useState('')
  useEffect(() => {
    axios.get(`/applications/${clientId}`).then((res) => {
      setApplicationsArr(res.data)
      setApplicationsArrCopy(res.data)
      setApplicationsArrCopy2(res.data)
    })
    axios.get(`/meetings/${clientId}`).then((res) => {
      setMeetings(res.data)
      setMeetingsCopy(res.data)
      setMeetingsCopy2(res.data)
    })
  }, [])
  return (
    <>
      <Header left="agent name" r="Edit Client" middle="New Client Profile" right="New Meeting Log" RightRight="Dashboard" linkR={`/client/${clientId}/edit`} linkMiddle={`/client/${clientId}/application/new`} linkRight={`/client/${clientId}/meeting/new`} linkRightRight='/dashboard' />

      <div className="search-bar-split">
        <input className="iae-search search-box" onChange={(e) => {
          if (e.target.value === "") {
            setApplicationsArr(applicationsArrCopy)
          } else {
            const newApps = applicationsArrCopy.filter((el) => {
              return el.insured_name.includes(e.target.value)
            })
            setApplicationsArr(newApps)
            setApplicationsArrCopy(applicationsArrCopy2)
          }
        }} placeholder="Search" />
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
      </div>

      <div className="insurance-application-entries">
        <div className="client-entries-box-2">
          <div className="client-entries-box">
            {applicationsArr.map((el, i) => {
              return <div onClick={() => {
                props.history.push(`/client/${clientId}/application/${el.application_id}`)
              }} className="client-one">
                <img className="client-icon" src="https://www.flaticon.com/premium-icon/icons/svg/2179/2179365.svg" />
                <p className="client-name-entries">{el.insured_name}</p>
              </div>
            })}
          </div>
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

    </>
  );
};
export default withRouter(InsuranceApplicationEntries);
