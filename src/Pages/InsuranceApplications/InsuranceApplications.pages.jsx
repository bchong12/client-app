import React from "react";
import Header from '../../Components/Header/Header.component'
import "./InsuranceApplication.pages.css";
import { withRouter } from 'react-router-dom'

const InsuranceApplicationEntries = (props) => {
  return (
    <>
      <Header left="agent name" middle="New Application" right="Client" linkMiddle="/client/1/application/new" linkRight="/client/1" />
      <input className="iae-search search-box" placeholder="Search" />
      <div className="insurance-application-entries">
        <div className="client-entries-box">
          <div onClick={() => {
            props.history.push('/client/1/application/1')
          }} className="client-one">
            <img className="client-icon" src="https://www.flaticon.com/premium-icon/icons/svg/2179/2179365.svg" />
            <p className="client-name-entries">Dave Roberts</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default withRouter(InsuranceApplicationEntries);
