import React, { useState, useEffect } from "react";
import Header from '../../Components/Header/Header.component'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

const InsuranceUpdate = (props) => {
  const clientId = props.match.params.id
  useEffect(() => {
    axios.get(`/application/${props.match.params.applicationId}`).then((res) => {
      const form = res.data[0]
      console.log(form)
      setInsuredName(form.insured_name)
      setGender(form.gender)
      setDob(form.dob)
      setSsn(form.ssn)
      setAddress(form.address)
      setYata(form.years_at_this_address)
      setTel(form.tel)
      setEmail(form.email)
      setDriversLicense(form.driver_license_number)
      setExp(form.exp)
      setState(form.state)
      setItiausc(form.us_citizens)
      setEmployer(form.employer)
      setStartDate(form.start_date)
      setAddress2(form.work_address)
      setOccupation(form.occupation)
      setDuties(form.duties)
      setAi(form.annual_income)
      setAhi(form.annual_household_income)
      setNetWorth(form.net_worth)
      setProduct(form.product_type)
      setCoverageAmount(form.coverage_amount)
      setClassRating(form.class_rating)
      setPlannedPremium(form.planned_premium)
      setTermYears(form.term_years)
      setReplacement(form.replacement)
      setPoi(form.purpose_of_insurance)
      setRiders(form.ltc)
      setLivingBenefits(form.living_benefits)
      setLir(form.lifetime_income_rider)
      setOtherRider(form.other_rider)
      setPbn(form.pb_name)
      setdobPb(form.pb_dob)
      setSsnPb(form.pb_ssn)
      setRpb(form.pb_relationship)
      setPbn2(form.pb2_name)
      setdobPb2(form.pb2_dob)
      setSsnPb2(form.pb2_ssn)
      setRpb2(form.pb2_relationship)
      setNc(form.con_name)
      setdobc(form.con_dob)
      setSsnc(form.con_ssn)
      setRc(form.con_relationship)
      setNc2(form.con2_name)
      setdobc2(form.con2_dob)
      setSsnc2(form.con2_ssn)
      setRc2(form.con2_relationship)
      setHeight(form.height)
      setWeight(form.weight)
      setTyn(form.tobacco)
      setTobaccoExplain(form.tobacco_explain)
      setApboc(form.pb_or_cholesterol)
      setApbocExplain(form.pbc_explain)
      setDiabetesyn(form.diabetes)
      setDiabetesExplain(form.diabetes_explain)
      setAhosotyn(form.surgery_history)
      setMedication(form.medication)
      setFail(form.father_liv)
      setFaad(form.father_dead)
      setFcod(form.father_cause)
      setMail(form.mother_liv)
      setMaad(form.mother_dead)
      setMcod(form.mother_cause)
      setBsail(form.sib_liv)
      setBsad(form.sib_dead)
      setBcod(form.sib_cause)
      setDUIexplain(form.driving_history)
      setPcpName(form.pcp_name)
      setPcpTel(form.pcp_tel)
      setPcpAddress(form.pcp_address)
      setPcpDlv(form.pcp_date_last)
      setPcpRar(form.pcp_reason)
      setBankName(form.bank_name)
      setBankAddress(form.bank_address)
      setBankRouting(form.bank_routing_number)
      setAccount(form.bank_account_number)
      setOwnerName(form.owner_name)
      setBankDob(form.bank_dob)
      setBankSsn(form.bank_ssn)
      setBankAddress2(form.bank_address_2)
      setBankTel(form.bank_tel)
      setExamScheduledDate(form.exam_scheduled_date)
      setExaminer(form.examiner)
      setMedNote(form.note)
      setC1(form.c1)
      setC2(form.c2)
      setFa(form.fa)
      setFa2(form.fa2)
      setPn(form.pn)
      setPn2(form.pn2)
      setIy(form.iy)
      setIy2(form.iy2)
      setSv(form.sv)
      setSv2(form.sv2)
      setO(form.o)
      setO2(form.o2)
      set1035(form.tenthirtyfive)
      setAhosotExplain(form.surgery_history_explain)
    })
  }, [])

  const [insuredName, setInsuredName] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [ssn, setSsn] = useState('')
  const [address, setAddress] = useState('')
  const [yata, setYata] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [driversLicense, setDriversLicense] = useState('')
  const [exp, setExp] = useState('')
  const [state, setState] = useState('')
  const [itiausc, setItiausc] = useState('')
  const [employer, setEmployer] = useState('')
  const [startDate, setStartDate] = useState('')
  const [address2, setAddress2] = useState('')
  const [occupation, setOccupation] = useState('')
  const [duties, setDuties] = useState('')
  const [ai, setAi] = useState('')
  const [ahi, setAhi] = useState('')
  const [netWorth, setNetWorth] = useState('')
  const [product, setProduct] = useState('')
  const [coverageAmount, setCoverageAmount] = useState('')
  const [classRating, setClassRating] = useState('')
  const [plannedPremium, setPlannedPremium] = useState('')
  const [termYears, setTermYears] = useState('')
  const [replacement, setReplacement] = useState('')
  const [poi, setPoi] = useState('')
  const [riders, setRiders] = useState('')
  const [livingBenefits, setLivingBenefits] = useState('')
  const [lir, setLir] = useState('false')
  const [otherRider, setOtherRider] = useState('')
  const [c1, setC1] = useState('')
  const [c2, setC2] = useState('')
  const [fa, setFa] = useState('')
  const [fa2, setFa2] = useState('')
  const [pn, setPn] = useState('')
  const [pn2, setPn2] = useState('')
  const [iy, setIy] = useState('')
  const [iy2, setIy2] = useState('')
  const [sv, setSv] = useState('')
  const [sv2, setSv2] = useState('')
  const [o, setO] = useState('')
  const [o2, setO2] = useState('')
  const [tenthirtyfive, set1035] = useState('')
  const [pbn, setPbn] = useState('')
  const [pbn2, setPbn2] = useState('')
  const [dobPb, setdobPb] = useState('')
  const [dobPb2, setdobPb2] = useState('')
  const [ssnPb, setSsnPb] = useState('')
  const [ssnPb2, setSsnPb2] = useState('')
  const [rpb, setRpb] = useState('')
  const [rpb2, setRpb2] = useState('')
  const [nc, setNc] = useState('')
  const [nc2, setNc2] = useState('')
  const [dobc, setdobc] = useState('')
  const [dobc2, setdobc2] = useState('')
  const [ssnc, setSsnc] = useState('')
  const [ssnc2, setSsnc2] = useState('')
  const [rc, setRc] = useState('')
  const [rc2, setRc2] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [tyn, setTyn] = useState('')
  const [tobaccoExplain, setTobaccoExplain] = useState('')
  const [abpoc, setApboc] = useState('')
  const [apbocExplain, setApbocExplain] = useState('')
  const [diabetesyn, setDiabetesyn] = useState('')
  const [diabetesExplain, setDiabetesExplain] = useState('')
  const [ahosotyn, setAhosotyn] = useState('')
  const [ahosotExplain, setAhosotExplain] = useState('')
  const [medication, setMedication] = useState('')
  const [fail, setFail] = useState('')
  const [faad, setFaad] = useState('')
  const [fcod, setFcod] = useState('')
  const [mail, setMail] = useState('')
  const [maad, setMaad] = useState('')
  const [mcod, setMcod] = useState('')
  const [bsail, setBsail] = useState('')
  const [bsad, setBsad] = useState('')
  const [bcod, setBcod] = useState('')
  const [DUIexplain, setDUIexplain] = useState('')
  const [pcpName, setPcpName] = useState('')
  const [pcpTel, setPcpTel] = useState('')
  const [pcpAddress, setPcpAddress] = useState('')
  const [pcpDlv, setPcpDlv] = useState('')
  const [pcpRar, setPcpRar] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAddress, setBankAddress] = useState('')
  const [bankRouting, setBankRouting] = useState('')
  const [bankAccount, setAccount] = useState('')
  const [bankOwnerName, setOwnerName] = useState('')
  const [bankDob, setBankDob] = useState('')
  const [bankSsn, setBankSsn] = useState('')
  const [bankAddress2, setBankAddress2] = useState('')
  const [bankTel, setBankTel] = useState('')
  const [examScheduledDate, setExamScheduledDate] = useState('')
  const [examiner, setExaminer] = useState('')
  const [medNote, setMedNote] = useState('')

  return (
    <>
      <Header left="agent name" middle="Applications" right="Client" linkMiddle={`/client/${clientId}/application`} linkRight={`/client/${clientId}`} />
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
                  <input onChange={(e) => {
                    setInsuredName(e.target.value)
                  }} defaultValue={insuredName} className="mls insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">Gender:</p>
                  <p className="mls">M</p>
                  <input onChange={() => {
                    setGender('male')
                  }} type="checkbox" checked={gender === 'male'} />
                  <p>/</p>
                  <p className="mls">F</p>
                  <input onChange={() => {
                    setGender('female')
                  }} checked={gender === 'female'} type="checkbox" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">DOB:</p>
                  <input onChange={(e) => {
                    setDob(e.target.value)
                  }} defaultValue={dob} className="short mls insurance-form-input" placeholder="XX/XX/XXXX" />
                </div>
                <div className="flex-row">
                  <p className="margins-left">SSN/TIN#:</p>
                  <input onChange={(e) => {
                    setSsn(e.target.value)
                  }} defaultValue={ssn} className="short mls insurance-form-input" />
                </div>
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input onChange={(e) => {
                  setAddress(e.target.value)
                }} defaultValue={address} className="mls insurance-form-input" autoComplete="false" placeholder="XXXX Address Ave., City, State, Zipcode" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Years at this Address:</p>
                <input onChange={(e) => {
                  setYata(e.target.value)
                }} defaultValue={yata} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input onChange={(e) => {
                  setTel(e.target.value)
                }} defaultValue={tel} placeholder="(XXX)-XXX-XXXX" className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Email:</p>
                <input onChange={(e) => {
                  setEmail(e.target.value)
                }} defaultValue={email} placeholder="---@mail.com" className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Driver's License #:</p>
                <input onChange={(e) => {
                  setDriversLicense(e.target.value)
                }} defaultValue={driversLicense} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Exp:</p>
                <input onChange={(e) => {
                  setExp(e.target.value)
                }} defaultValue={exp} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">State:</p>
                <input onChange={(e) => {
                  setState(e.target.value)
                }} defaultValue={state} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Is the Insured a US Citizen?:</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setItiausc('yes')
                }} checked={'yes' === itiausc} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setItiausc('no')
                }} checked={'no' === itiausc} type="checkbox" />
                <p className="mls"><p>If no, resident/visa copy</p></p>
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Employer:</p>
                <input onChange={(e) => {
                  setEmployer(e.target.value)
                }} defaultValue={employer} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Start Date:</p>
                <input onChange={(e) => {
                  setStartDate(e.target.value)
                }} defaultValue={startDate} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Address:</p>
                <input onChange={(e) => {
                  setAddress2(e.target.value)
                }} defaultValue={address2} className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Occupation:</p>
                <input onChange={(e) => {
                  setOccupation(e.target.value)
                }} defaultValue={occupation} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Duties:</p>
                <input onChange={(e) => {
                  setDuties(e.target.value)
                }} defaultValue={duties} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Annual Income:</p>
                <input onChange={(e) => {
                  setAi(e.target.value)
                }} defaultValue={ai} className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Annual Household Income:</p>
                <input onChange={(e) => {
                  setAhi(e.target.value)
                }} defaultValue={ahi} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Net Worth:</p>
                <input onChange={(e) => {
                  setNetWorth(e.target.value)
                }} defaultValue={netWorth} className="mls insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Application Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Product Type/Name:</p>
                <input onChange={(e) => {
                  setProduct(e.target.value)
                }} defaultValue={product} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Coverage Amount:</p>
                <input onChange={(e) => {
                  setCoverageAmount(e.target.value)
                }} defaultValue={coverageAmount} className="mls insurance-form-input" placeholder="$" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Class Rating:</p>
                <input onChange={(e) => {
                  setClassRating(e.target.value)
                }} defaultValue={classRating} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Planned Premium:</p>
                <input onChange={(e) => {
                  setPlannedPremium(e.target.value)
                }} defaultValue={plannedPremium} className="mls insurance-form-input" placeholder="$" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Term Years:</p>
                <input onChange={(e) => {
                  setTermYears(e.target.value)
                }} defaultValue={termYears} className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Replacement:</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setReplacement('yes')
                }} checked={'yes' === replacement} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setReplacement('no')
                }} checked={'no' === replacement} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Purpose of Insurance:</p>
                <input onChange={(e) => {
                  setPoi(e.target.value)
                }} defaultValue={poi} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Riders:</p>
              </div>
              <div className="flex-row">
                <p className="mls">• LTC / Chronic Illness:</p>
                <p className="mls">2%</p>
                <input onChange={() => {
                  setRiders('2%')
                }} checked={'2%' === riders} type="checkbox" />
                <p>/</p>
                <p className="mls">4%</p>
                <input onChange={() => {
                  setRiders('4%')
                }} checked={'4%' === riders} type="checkbox" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="mobile-font flex-row">
                <p className="mls">• Living Benefits:</p>
                <p className="mls">Chronic</p>
                <input onChange={() => {
                  setLivingBenefits('Chronic')
                }} checked={'Chronic' === livingBenefits} type="checkbox" />
                <p>/</p>
                <p className="mls">Critical</p>
                <input onChange={() => {
                  setLivingBenefits('Critical')
                }} checked={'Critical' === livingBenefits} type="checkbox" />
                <p>/</p>
                <p className="mls">Terminal</p>
                <input onChange={() => {
                  setLivingBenefits('Terminal')
                }} checked={'Terminal' === livingBenefits} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">• Lifetime Income Rider:</p>
                <input onChange={() => {
                  if (lir === 'true') {
                    setLir('false')
                  } else {
                    setLir('true')
                  }
                }} checked={lir === 'true'} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="margins-left">• Other Rider:</p>
                <input onChange={(e) => {
                  setOtherRider(e.target.value)
                }} defaultValue={otherRider} className="mls insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Existing / Pending Coverage</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-column">
                <p>Carrier</p>
                <input onChange={(e) => {
                  setC1(e.target.value)
                }} defaultValue={c1} className="insurance-form-input" />
                <input onChange={(e) => {
                  setC2(e.target.value)
                }} defaultValue={c2} className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Face Amount</p>
                <input onChange={(e) => {
                  setFa(e.target.value)
                }} defaultValue={fa} placeholder="$" className="insurance-form-input" />
                <input onChange={(e) => {
                  setFa2(e.target.value)
                }} defaultValue={fa2} placeholder="$" className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Policy Number</p>
                <input onChange={(e) => {
                  setPn(e.target.value)
                }} defaultValue={pn} placeholder="#" className="insurance-form-input" />
                <input onChange={(e) => {
                  setPn2(e.target.value)
                }} defaultValue={pn2} placeholder="#" className="insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-column">
                <p>Issue Year</p>
                <input onChange={(e) => {
                  setIy(e.target.value)
                }} defaultValue={iy} className="insurance-form-input" />
                <input onChange={(e) => {
                  setIy2(e.target.value)
                }} defaultValue={iy2} className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Surrender Value</p>
                <input onChange={(e) => {
                  setSv(e.target.value)
                }} defaultValue={sv} placeholder="$" className="insurance-form-input" />
                <input onChange={(e) => {
                  setSv2(e.target.value)
                }} defaultValue={sv2} placeholder="$" className="insurance-form-input" />
              </div>
              <div className="margins-left flex-column">
                <p>Owner</p>
                <input onChange={(e) => {
                  setO(e.target.value)
                }} defaultValue={o} className="insurance-form-input" />
                <input onChange={(e) => {
                  setO2(e.target.value)
                }} defaultValue={o2} className="insurance-form-input" />
              </div>
              <div className="margins-left margins-bottom-cancel flex-column">
                <p>Using funds from existing policies to pay premiums due on the new policy? If yes, transfer / 1035 form</p>
                <div className="flex-row">
                  <p className="mls">Y</p>
                  <input onChange={() => {
                    set1035('Yes')
                  }} checked={'Yes' === tenthirtyfive} type="checkbox" />
                  <p>/</p>
                  <p className="mls">N</p>
                  <input onChange={() => {
                    set1035('No')
                  }} checked={'No' === tenthirtyfive} type="checkbox" />
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
                  <input onChange={(e) => {
                    setPbn(e.target.value)
                  }} defaultValue={pbn} className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input onChange={(e) => {
                    setdobPb(e.target.value)
                  }} defaultValue={dobPb} placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input onChange={(e) => {
                    setSsnPb(e.target.value)
                  }} defaultValue={ssnPb} placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input onChange={(e) => {
                    setRpb(e.target.value)
                  }} defaultValue={rpb} className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Name:</p>
                  <input onChange={(e) => {
                    setPbn2(e.target.value)
                  }} defaultValue={pbn2} className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input onChange={(e) => {
                    setdobPb2(e.target.value)
                  }} defaultValue={dobPb2} placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input onChange={(e) => {
                    setSsnPb2(e.target.value)
                  }} defaultValue={ssnPb2} placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input onChange={(e) => {
                    setRpb2(e.target.value)
                  }} defaultValue={rpb2} className="mls long insurance-form-input" />
                </div>
              </div>
              <div className="margins-biggest-top-T margins-big-left flex-column-center">
                <p className="margins-biggest-left-2">Contingent</p>
                <div className="flex-row">
                  <p>Name:</p>
                  <input onChange={(e) => {
                    setNc(e.target.value)
                  }} defaultValue={nc} className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input onChange={(e) => {
                    setdobc(e.target.value)
                  }} defaultValue={dobc} placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input onChange={(e) => {
                    setSsnc(e.target.value)
                  }} defaultValue={ssnc} placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input onChange={(e) => {
                    setRc(e.target.value)
                  }} defaultValue={rc} className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Name:</p>
                  <input onChange={(e) => {
                    setNc2(e.target.value)
                  }} defaultValue={nc2} className="margins-slight-left-2 long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Date of Birth:</p>
                  <input onChange={(e) => {
                    setdobc2(e.target.value)
                  }} defaultValue={dobc2} placeholder="XX/XX/XXXX" className="mls long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>SSN#:</p>
                  <input onChange={(e) => {
                    setSsnc2(e.target.value)
                  }} defaultValue={ssnc2} placeholder="#" className="margins-slight-left long insurance-form-input" />
                </div>
                <div className="flex-row">
                  <p>Relationship:</p>
                  <input onChange={(e) => {
                    setRc2(e.target.value)
                  }} defaultValue={rc2} className="mls long insurance-form-input" />
                </div>
              </div>
            </div>
            <div className="margins-big-top styled-title">
              <p>Health Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Height:</p>
                <input onChange={(e) => {
                  setHeight(e.target.value)
                }} defaultValue={height} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Weight:</p>
                <input onChange={(e) => {
                  setWeight(e.target.value)
                }} defaultValue={weight} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tobacco:</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setTyn('Yes')
                }} checked={'Yes' === tyn} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setTyn('No')
                }} checked={'No' === tyn} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes,</p>
                <input onChange={(e) => {
                  setTobaccoExplain(e.target.value)
                }} defaultValue={tobaccoExplain} className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Abnormal blood pressure or Cholesterols?</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setApboc('Yes')
                }} checked={'Yes' === abpoc} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setApboc('No')
                }} checked={'No' === abpoc} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input onChange={(e) => {
                  setApbocExplain(e.target.value)
                }} defaultValue={apbocExplain} className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Diabetes?</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setDiabetesyn('Yes')
                }} checked={'Yes' === diabetesyn} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setDiabetesyn('No')
                }} checked={'No' === diabetesyn} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input onChange={(e) => {
                  setDiabetesExplain(e.target.value)
                }} defaultValue={diabetesExplain} className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Any history of surgery or treatment?</p>
                <p className="mls">Y</p>
                <input onChange={() => {
                  setAhosotyn('Yes')
                }} checked={'Yes' === ahosotyn} type="checkbox" />
                <p>/</p>
                <p className="mls">N</p>
                <input onChange={() => {
                  setAhosotyn('No')
                }} checked={'No' === ahosotyn} type="checkbox" />
              </div>
              <div className="flex-row">
                <p className="mls">If Yes, please describe</p>
                <input onChange={(e) => {
                  setAhosotExplain(e.target.value)
                }} defaultValue={ahosotExplain} className="mls long insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p className="mlr">List any medication you are currently taking:</p>
              </div>
              <textarea onChange={(e) => {
                setMedication(e.target.value)
              }} defaultValue={medication} className="insurance-form-ta-2" />
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
              <input onChange={(e) => {
                setFail(e.target.value)
              }} defaultValue={fail} placeholder="Age if Living" className="margins-bigger-left short insurance-form-input" />
              <input onChange={(e) => {
                setFaad(e.target.value)
              }} defaultValue={faad} placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input onChange={(e) => {
                setFcod(e.target.value)
              }} defaultValue={fcod} placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p>Mother</p>
              <input onChange={(e) => {
                setMail(e.target.value)
              }} defaultValue={mail} placeholder="Age if Living" className="margins-bigger-left-4 short insurance-form-input" />
              <input onChange={(e) => {
                setMaad(e.target.value)
              }} defaultValue={maad} placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input onChange={(e) => {
                setMcod(e.target.value)
              }} defaultValue={mcod} placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p>Brother/Sister</p>
              <input onChange={(e) => {
                setBsail(e.target.value)
              }} defaultValue={bsail} placeholder="Age if Living" className="margins-big-left-2 short insurance-form-input" />
              <input onChange={(e) => {
                setBsad(e.target.value)
              }} defaultValue={bsad} placeholder="Age at Death" className="margins-bigger-left-2 short insurance-form-input" />
              <input onChange={(e) => {
                setBcod(e.target.value)
              }} defaultValue={bcod} placeholder="Cause of Death" className="margins-bigger-left-3 short insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p className="bolder">Driving History</p>
            </div>
            <div className="flex insurance-entry-row">
              <p>Any moving violation/DUI/license suspension in the past 3 years?</p>
            </div>
            <div className="flex insurance-entry-row">
              <p className="mls">If yes, please describe</p>
              <input onChange={(e) => {
                setDUIexplain(e.target.value)
              }} defaultValue={DUIexplain} className="mls longest insurance-form-input" />
            </div>
            <div className="flex insurance-entry-row">
              <p className="bolder">Primary Care Physician</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Name:</p>
                <input onChange={(e) => {
                  setPcpName(e.target.value)
                }} defaultValue={pcpName} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input onChange={(e) => {
                  setPcpTel(e.target.value)
                }} defaultValue={pcpTel} className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input onChange={(e) => {
                  setPcpAddress(e.target.value)
                }} defaultValue={pcpAddress} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Date Last Visited:</p>
                <input onChange={(e) => {
                  setPcpDlv(e.target.value)
                }} defaultValue={pcpDlv} className="mls insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Reason and Result:</p>
                <input onChange={(e) => {
                  setPcpRar(e.target.value)
                }} defaultValue={pcpRar} className="mls longest insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Bank Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Bank Name:</p>
                <input onChange={(e) => {
                  setBankName(e.target.value)
                }} defaultValue={bankName} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Address:</p>
                <input onChange={(e) => {
                  setBankAddress(e.target.value)
                }} defaultValue={bankAddress} className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Routing#:</p>
                <input onChange={(e) => {
                  setBankRouting(e.target.value)
                }} defaultValue={bankRouting} placeholder="#" className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Account#:</p>
                <input onChange={(e) => {
                  setAccount(e.target.value)
                }} defaultValue={bankAccount} placeholder="#" className="mls  insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Owner Name:</p>
                <input onChange={(e) => {
                  setOwnerName(e.target.value)
                }} defaultValue={bankOwnerName} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">DOB:</p>
                <input onChange={(e) => {
                  setBankDob(e.target.value)
                }} defaultValue={bankDob} className="mls short insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">SSN:</p>
                <input onChange={(e) => {
                  setBankSsn(e.target.value)
                }} defaultValue={bankSsn} className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Address:</p>
                <input onChange={(e) => {
                  setBankAddress2(e.target.value)
                }} defaultValue={bankAddress2} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Tel:</p>
                <input onChange={(e) => {
                  setBankTel(e.target.value)
                }} defaultValue={bankTel} className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="margins-top styled-title">
              <p>Medical Exam Information</p>
            </div>
            <div className="flex insurance-entry-row">
              <div className="flex-row">
                <p>Exam Scheduled Date:</p>
                <input onChange={(e) => {
                  setExamScheduledDate(e.target.value)
                }} defaultValue={examScheduledDate} className="mls insurance-form-input" />
              </div>
              <div className="flex-row">
                <p className="margins-left">Examiner:</p>
                <input onChange={(e) => {
                  setExaminer(e.target.value)
                }} defaultValue={examiner} className="mls short insurance-form-input" />
              </div>
            </div>
            <div className="flex insurance-entry-row">
              <p>Note</p>
            </div>
            <div className="flex insurance-entry-row">
              <textarea onChange={(e) => {
                setMedNote(e.target.value)
              }} defaultValue={medNote} className="text insurance-form-ta" />
            </div>
            <div className="margins-top margins-biggest-left">
              <button onClick={() => {
                axios.put('/application', {
                  application_id: props.match.params.applicationId,
                  insured_name: insuredName,
                  gender,
                  dob,
                  ssn,
                  address,
                  years_at_this_address: yata,
                  tel,
                  email,
                  driver_license_number: driversLicense,
                  exp,
                  state,
                  us_citizens: itiausc,
                  employer,
                  start_date: startDate,
                  work_address: address2,
                  occupation,
                  duties,
                  annual_income: ai,
                  annual_household_income: ahi,
                  net_worth: netWorth,
                  product_type: product,
                  coverage_amount: coverageAmount,
                  class_rating: classRating,
                  planned_premium: plannedPremium,
                  term_years: termYears,
                  replacement,
                  purpose_of_insurance: poi,
                  ltc: riders,
                  living_benefits: livingBenefits,
                  lifetime_income_rider: lir,
                  other_rider: otherRider,
                  pb_name: pbn,
                  pb_dob: dobPb,
                  pb_ssn: ssnPb,
                  pb_relationship: rpb,
                  pb2_name: pbn2,
                  pb2_dob: dobPb2,
                  pb2_ssn: ssnPb2,
                  pb2_relationship: rpb2,
                  con_name: nc,
                  con_dob: dobc,
                  con_ssn: ssnc,
                  con_relationship: rc,
                  con2_name: nc2,
                  con2_dob: dobc2,
                  con2_ssn: ssnc2,
                  con2_relationship: rc2,
                  height,
                  weight,
                  tobacco: tyn,
                  pb_or_cholesterol: abpoc,
                  pbc_explain: apbocExplain,
                  diabetes: diabetesyn,
                  diabetes_explain: diabetesExplain,
                  surgery_history: ahosotyn,
                  surgery_history_explain: ahosotExplain,
                  medication,
                  father_liv: fail,
                  father_dead: faad,
                  father_cause: fcod,
                  mother_liv: mail,
                  mother_dead: maad,
                  mother_cause: mcod,
                  sib_liv: bsail,
                  sib_dead: bsad,
                  sib_cause: bcod,
                  driving_history: DUIexplain,
                  pcp_name: pcpName,
                  pcp_tel: pcpTel,
                  pcp_address: pcpAddress,
                  pcp_date_last: pcpDlv,
                  pcp_reason: pcpRar,
                  bank_name: bankName,
                  bank_address: bankAddress,
                  bank_routing_number: bankRouting,
                  bank_account_number: bankAccount,
                  owner_name: bankOwnerName,
                  bank_dob: bankDob,
                  bank_ssn: bankSsn,
                  bank_address_2: bankAddress2,
                  bank_tel: bankTel,
                  exam_scheduled_date: examScheduledDate,
                  examiner,
                  note: medNote,
                  tobacco_explain: tobaccoExplain,
                  c1,
                  c2,
                  fa,
                  fa2,
                  pn,
                  pn2,
                  iy,
                  iy2,
                  sv,
                  sv2,
                  o,
                  o2,
                  tenthirtyfive
                }).then(() => {
                  props.history.push(`/client/${clientId}/application`)
                })
              }} className="mls thick login-button">Submit</button>
              <button onClick={() => {
                axios.post('/application/email', {
                  name: insuredName,
                  gender,
                  dateOfBirth: dob,
                  SSN: ssn,
                  address,
                  years_at_this_address: yata,
                  tel,
                  email,
                  driver_license_number: driversLicense,
                  exp,
                  state,
                  us_citizens: itiausc,
                  employer,
                  start_date: startDate,
                  work_address: address2,
                  occupation,
                  duties,
                  annual_income: ai,
                  annual_household_income: ahi,
                  net_worth: netWorth,
                  product_type: product,
                  coverage_amount: coverageAmount,
                  class_rating: classRating,
                  planned_premium: plannedPremium,
                  term_years: termYears,
                  replacement,
                  purpose_of_insurance: poi,
                  ltc: riders,
                  living_benefits: livingBenefits,
                  lifetime_income_rider: lir,
                  other_rider: otherRider,
                  pb_name: pbn,
                  pb_dob: dobPb,
                  pb_ssn: ssnPb,
                  pb_relationship: rpb,
                  pb2_name: pbn2,
                  pb2_dob: dobPb2,
                  pb2_ssn: ssnPb2,
                  pb2_relationship: rpb2,
                  con_name: nc,
                  con_dob: dobc,
                  con_ssn: ssnc,
                  con_relationship: rc,
                  con2_name: nc2,
                  con2_dob: dobc2,
                  con2_ssn: ssnc,
                  con2_relationship: rc,
                  height,
                  weight,
                  tobacco: tyn,
                  pb_or_cholesterol: abpoc,
                  pbc_explain: apbocExplain,
                  diabetes: diabetesyn,
                  diabetes_explain: diabetesExplain,
                  surgery_history: ahosotyn,
                  surgery_history_explain: ahosotExplain,
                  medication,
                  father_liv: fail,
                  father_dead: faad,
                  father_cause: fcod,
                  mother_liv: mail,
                  mother_dead: maad,
                  mother_cause: mcod,
                  sib_liv: bsail,
                  sib_dead: bsad,
                  sib_cause: bcod,
                  driving_history: DUIexplain,
                  pcp_name: pcpName,
                  pcp_tel: pcpTel,
                  pcp_address: pcpAddress,
                  pcp_date_last: pcpDlv,
                  pcp_reason: pcpRar,
                  bank_name: bankName,
                  bank_address: bankAddress,
                  bank_routing_number: bankRouting,
                  bank_account_number: bankAccount,
                  owner_name: bankOwnerName,
                  bank_dob: bankDob,
                  bank_ssn: bankSsn,
                  bank_address_2: bankAddress2,
                  bank_tel: bankTel,
                  exam_scheduled_date: examScheduledDate,
                  examiner: examiner,
                  note: medNote,
                  tobacco_explain: tobaccoExplain,
                  c1,
                  c2,
                  fa,
                  fa2,
                  pn,
                  pn2,
                  iy,
                  iy2,
                  sv,
                  sv2,
                  o,
                  o2,
                  tenthirtyfive,
                  email1: props.auth.user.email
                })
                axios.put('/application', {
                  application_id: props.match.params.applicationId,
                  insured_name: insuredName,
                  gender,
                  dob,
                  ssn,
                  address,
                  years_at_this_address: yata,
                  tel,
                  email,
                  driver_license_number: driversLicense,
                  exp,
                  state,
                  us_citizens: itiausc,
                  employer,
                  start_date: startDate,
                  work_address: address2,
                  occupation,
                  duties,
                  annual_income: ai,
                  annual_household_income: ahi,
                  net_worth: netWorth,
                  product_type: product,
                  coverage_amount: coverageAmount,
                  class_rating: classRating,
                  planned_premium: plannedPremium,
                  term_years: termYears,
                  replacement,
                  purpose_of_insurance: poi,
                  ltc: riders,
                  living_benefits: livingBenefits,
                  lifetime_income_rider: lir,
                  other_rider: otherRider,
                  pb_name: pbn,
                  pb_dob: dobPb,
                  pb_ssn: ssnPb,
                  pb_relationship: rpb,
                  pb2_name: pbn2,
                  pb2_dob: dobPb2,
                  pb2_ssn: ssnPb2,
                  pb2_relationship: rpb2,
                  con_name: nc,
                  con_dob: dobc,
                  con_ssn: ssnc,
                  con_relationship: rc,
                  con2_name: nc2,
                  con2_dob: dobc2,
                  con2_ssn: ssnc2,
                  con2_relationship: rc2,
                  height,
                  weight,
                  tobacco: tyn,
                  pb_or_cholesterol: abpoc,
                  pbc_explain: apbocExplain,
                  diabetes: diabetesyn,
                  diabetes_explain: diabetesExplain,
                  surgery_history: ahosotyn,
                  surgery_history_explain: ahosotExplain,
                  medication,
                  father_liv: fail,
                  father_dead: faad,
                  father_cause: fcod,
                  mother_liv: mail,
                  mother_dead: maad,
                  mother_cause: mcod,
                  sib_liv: bsail,
                  sib_dead: bsad,
                  sib_cause: bcod,
                  driving_history: DUIexplain,
                  pcp_name: pcpName,
                  pcp_tel: pcpTel,
                  pcp_address: pcpAddress,
                  pcp_date_last: pcpDlv,
                  pcp_reason: pcpRar,
                  bank_name: bankName,
                  bank_address: bankAddress,
                  bank_routing_number: bankRouting,
                  bank_account_number: bankAccount,
                  owner_name: bankOwnerName,
                  bank_dob: bankDob,
                  bank_ssn: bankSsn,
                  bank_address_2: bankAddress2,
                  bank_tel: bankTel,
                  exam_scheduled_date: examScheduledDate,
                  examiner,
                  note: medNote,
                  tobacco_explain: tobaccoExplain,
                  c1,
                  c2,
                  fa,
                  fa2,
                  pn,
                  pn2,
                  iy,
                  iy2,
                  sv,
                  sv2,
                  o,
                  o2,
                  tenthirtyfive,
                }).then(() => {
                  props.history.push(`/client/${clientId}/application`)
                })
              }} className="mls thick login-button">Email</button>
              <button onClick={() => {
                axios({
                  url: '/application',
                  method: 'delete',
                  data: { application_id: props.match.params.applicationId }
                }).then(() => {
                  props.history.push(`/client/${clientId}/application`)
                })
              }} className="mls thick login-button">Delete</button>
            </div>
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

export default connect(mapStateToProps)(withRouter(InsuranceUpdate))
