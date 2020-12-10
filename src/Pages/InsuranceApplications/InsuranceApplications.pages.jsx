import React, { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.component'
import "./InsuranceApplication.pages.css";
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const InsuranceApplicationEntries = (props) => {
  const clientId = props.match.params.id
  const [applicationsArr, setApplicationsArr] = useState([])
  const [applicationsArrCopy, setApplicationsArrCopy] = useState([])
  const [applicationsArrCopy2, setApplicationsArrCopy2] = useState([])
  useEffect(() => {
    axios.get(`/applications/${clientId}`).then((res) => {
      setApplicationsArr(res.data)
      setApplicationsArrCopy(res.data)
      setApplicationsArrCopy2(res.data)
    })
  }, [])
  return (
    <>
      <Header left="agent name" middle="New Application" right="Client" linkMiddle={`/client/${clientId}/application/new`} linkRight={`/client/${clientId}`} />
      <input className="iae-search search-box" placeholder="Search" />
      <div className="insurance-application-entries">
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
      </div>
    </>
  );
};
export default withRouter(InsuranceApplicationEntries);
