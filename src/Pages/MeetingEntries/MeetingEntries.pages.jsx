import React from "react";
import Header from '../../Components/Header/Header.component'
import "./MeetingEntries.pages.css";

const MeetingEntries = () => {
  return (
    <div className="meeting-entries">
      <Header left="agent name" middle="New Meeting" right="Client" linkMiddle="/client/1/meeting/new" linkRight="/client/1" />
      <input className="iae-search search-box" placeholder="Search" />
      <div className="insurance-application-entries">
        <div className="client-entries-box">
          <div onClick={() => {

          }} className="client-one">
            <img className="client-icon" src="https://img.icons8.com/fluent-systems-filled/344/meeting.png" />
            <p className="client-name-entries">Dave Roberts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingEntries;
