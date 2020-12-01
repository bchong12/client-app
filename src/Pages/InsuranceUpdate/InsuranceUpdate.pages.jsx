import React from "react";
import Header from '../../Components/Header/Header.component'

const InsuranceUpdate = () => {
  return (
    <>
      <Header left="agent name" middle="Dashboard" right="Client" linkMiddle="/dashboard" linkRight="/client/1" />
      <div className="insurance-entry">
        <div className="insurance-input-box">
          <p className="login-title">Client Data Form</p>
          <div className="beginning-of-form">
            <div className="application-form-section">
              <div className="styled-title">
                <p>Proposed Insured Information</p>
              </div>
              <div className="flex insurance-entry-row">
                <div className="flex-row">
                  <p>Insured Name:</p>
                  <input className="mls insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">Gender:</p>
                  <p className="mls">M</p>
                  <input type="checkbox" />
                  <p>/</p>
                  <p className="mls">F</p>
                  <input type="checkbox" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">DOB:</p>
                  <input className="short mls insurance-form-input" placeholder="XX/XX/XXXX" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">SSN/TIN#:</p>
                  <input className="short mls insurance-form-input" />
                </div>
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input className="mls insurance-form-input" autoComplete="false" placeholder="XXXX Address Ave., City, State, Zipcode" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Years at this Address:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input placeholder="(XXX)-XXX-XXXX" className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Email:</p>
                <input placeholder="---@mail.com" className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Driver's License #:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Exp:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">State:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Is the Insured a US Citizen?:</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
                <p className="mls"><p>If no, resident/visa copy</p></p>
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Employer:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Start Date:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Address:</p>
                <input className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Occupation:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Duties:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Annual Income:</p>
                <input className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Annual Household Income:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Net Worth:</p>
                <input className="mls insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Application Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Product Type/Name:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Coverage Amount:</p>
                <input className="mls insurance-form-input" placeholder="$" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Class Rating:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Planned Premium:</p>
                <input className="mls insurance-form-input" placeholder="$" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Term Years:</p>
                <input className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Replacement:</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Purpose of Insurance:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Riders:</p>
              </div>
              <div className="flex-row">
                <p className="mls">• LTC / Chronic Illness:</p>
                <p className="mls">2%</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">4%</p>
                <input type="checkbox" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="mobile-font flex-row">
                <p className="mls">• Living Benefits:</p>
                <p className="mls">Chronic</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">Critical</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">Terminal</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">• Lifetime Income Rider:</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">• Other Rider:</p>
                <input className="mls insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Existing / Pending Coverage</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-column">
                <p>Carrier</p>
                <input className="insurance-form-input" />
                <input className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Face Amount</p>
                <input placeholder="$" className="insurance-form-input" />
                <input placeholder="$" className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Policy Number</p>
                <input placeholder="#" className="insurance-form-input" />
                <input placeholder="#" className="insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-column">
                <p>Issue Year</p>
                <input className="insurance-form-input" />
                <input className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Surrender Value</p>
                <input placeholder="$" className="insurance-form-input" />
                <input placeholder="$" className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Owner</p>
                <input className="insurance-form-input" />
                <input className="insurance-form-input" />
              </div>
              <div className="margins-left margins-bottom-cancel flex-column">
                <p>Using funds from existing policies to pay premiums due on the new policy? If yes, transfer / 1035 form</p>
                <div className="flex-row">
                  <p className="mls">Y</p>
                  <input type="checkbox" />
                  <p>/</p>
                  <p className="mls">N</p>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Benificiary Information</p>
            </div>
            <div className="flex margins-big-top insurance-entry-row">
              <div className="flex-column-center">
                <p className="margins-biggest-left">Primary Benificiary</p>
                <div className="flex-row">
                  <p>Name:</p>
                  <input className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Name:</p>
                  <input className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input className="mls long insurance-form-input" />
                </div>
              </div>
              <div className="margins-biggest-top-T margins-big-left flex-column-center">
                <p className="margins-biggest-left-2">Contingent</p>
                <div className="flex-row">
                  <p>Name:</p>
                  <input className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Name:</p>
                  <input className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input className="mls long insurance-form-input" />
                </div>
              </div>
            </div>
            <div className="margins-big-top styled-title">
              <p>Health Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Height:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Weight:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tobacco:</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes,</p>
                <input className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Abnormal blood pressure or Cholesterols?</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Diabetes?</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Any history of surgery or treatment?</p>
                <p className="mls">Y</p>
                <input type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p className="mlr">List any medication you are currently taking:</p>
              </div>
              <textarea className="insurance-form-ta-2" />
            </div>
            <div className="flex insurance-entry-row">
              <p className="bolder">Immediate Family History</p>
            </div>
            <div className="flex insurance-entry-row">
              <p className="mobile-only margins-biggest-left">Age if Living</p>
              <p className="mobile-only margins-biggest-left">Age at Death</p>
              <p className="mobile-only margins-biggest-left">Cause of Death</p>
            </div>
            <div className="flex insurance-entry-row">
              <p>Father</p>
              <input placeholder="Age if Living" className="margins-bigger-left short insurance-form-input" />
              <input placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p>Mother</p>
              <input placeholder="Age if Living" className="margins-bigger-left-4 short insurance-form-input" />
              <input placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p>Brother/Sister</p>
              <input placeholder="Age if Living" className="margins-big-left-2 short insurance-form-input" />
              <input placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p className="bolder">Driving History</p>
            </div>
            <div className="flex insurance-entry-row">
              <p>Any moving violation/DUI/license suspension in the past 3 years?</p>
            </div>
            <div className="flex insurance-entry-row">
              <p className="mls">If yes, please describe</p>
              <input className="mls longest insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p className="bolder">Primary Care Physician</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Name:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Date Last Visited:</p>
                <input className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Reason and Result:</p>
                <input className="mls longest insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Bank Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Bank Name:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Address:</p>
                <input className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Routing#:</p>
                <input placeholder="#" className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Account#:</p>
                <input placeholder="#" className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Owner Name:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">DOB:</p>
                <input className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">SSN:</p>
                <input className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Medical Exam Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Exam Scheduled Date:</p>
                <input className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Examiner:</p>
                <input className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <p>Note</p>
            </div>
            <div className="flex insurance-entry-row">
              <textarea className="insurance-form-ta" />
            </div>
            <button className="margins-top center big login-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default InsuranceUpdate;
