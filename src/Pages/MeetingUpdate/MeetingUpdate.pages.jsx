import React from "react";
import Header from '../../Components/Header/Header.component'

const MeetingUpdate = () => {
  return (
    <>
      <Header left="agent name" middle="Dashboard" right="Client" linkMiddle="/dashboard" linkRight="/client/1" />
      <div className="meeting-entry">
        <div className="meeting-input-box">
          <p className="margins-top form-title">Meeting Notes</p>
          <div className="flex margins-top insurance-entry-row">
            <div className="flex-row">
              <p>Name</p>
              <input className="mls insurance-form-input" />
            </div>
          </div>
          <div className="flex insurance-entry-row">
            <div className="flex-row">
              <p>Date</p>
              <input className="mls insurance-form-input" />
            </div>
          </div>
          <div className="flex insurance-entry-row">
            <p>Notes</p>
          </div>
          <div className="flex insurance-entry-row">
            <textarea className="insurance-form-ta" />
          </div>
          <button className="margins-top center big login-button">Submit</button>
        </div>
      </div>
    </>
  );
};

export default MeetingUpdate;
