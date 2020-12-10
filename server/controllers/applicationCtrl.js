module.exports = {
    addApplication: (req, res) => {
        const db = req.app.get('db')
        const { client_id,
            insured_name,
            gender,
            dob,
            ssn,
            address,
            years_at_this_address,
            tel,
            email,
            driver_license_number,
            exp,
            state,
            us_citizens,
            employer,
            start_date,
            work_address,
            occupation,
            duties,
            annual_income,
            annual_household_income,
            net_worth,
            product_type,
            coverage_amount,
            class_rating,
            planned_premium,
            term_years,
            replacement,
            purpose_of_insurance,
            ltc,
            living_benefits,
            lifetime_income_rider,
            other_rider,
            pb_name,
            pb_dob,
            pb_ssn,
            pb_relationship,
            pb2_name,
            pb2_dob,
            pb2_ssn,
            pb2_relationship,
            con_name,
            con_dob,
            con_ssn,
            con_relationship,
            con2_name,
            con2_dob,
            con2_ssn,
            con2_relationship,
            height,
            weight,
            tobacco,
            pb_or_cholesterol,
            pbc_explain,
            diabetes,
            diabetes_explain,
            surgery_history,
            surgery_history_explain,
            medication,
            father_liv,
            father_dead,
            father_cause,
            mother_liv,
            mother_dead,
            mother_cause,
            sib_liv,
            sib_dead,
            sib_cause,
            driving_history,
            pcp_name,
            pcp_tel,
            pcp_address,
            pcp_date_last,
            pcp_reason,
            bank_name,
            bank_address,
            bank_routing_number,
            bank_account_number,
            owner_name,
            bank_dob,
            bank_ssn,
            bank_address_2,
            bank_tel,
            exam_scheduled_date,
            examiner,
            note,
            tobacco_explain,
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
        } = req.body

        db.applications.add_application({
            client_id,
            insured_name,
            gender,
            dob,
            ssn,
            address,
            years_at_this_address,
            tel,
            email,
            driver_license_number,
            exp,
            state,
            us_citizens,
            employer,
            start_date,
            work_address,
            occupation,
            duties,
            annual_income,
            annual_household_income,
            net_worth,
            product_type,
            coverage_amount,
            class_rating,
            planned_premium,
            term_years,
            replacement,
            purpose_of_insurance,
            ltc,
            living_benefits,
            lifetime_income_rider,
            other_rider,
            pb_name,
            pb_dob,
            pb_ssn,
            pb_relationship,
            pb2_name,
            pb2_dob,
            pb2_ssn,
            pb2_relationship,
            con_name,
            con_dob,
            con_ssn,
            con_relationship,
            con2_name,
            con2_dob,
            con2_ssn,
            con2_relationship,
            height,
            weight,
            tobacco,
            pb_or_cholesterol,
            pbc_explain,
            diabetes,
            diabetes_explain,
            surgery_history,
            surgery_history_explain,
            medication,
            father_liv,
            father_dead,
            father_cause,
            mother_liv,
            mother_dead,
            mother_cause,
            sib_liv,
            sib_dead,
            sib_cause,
            driving_history,
            pcp_name,
            pcp_tel,
            pcp_address,
            pcp_date_last,
            pcp_reason,
            bank_name,
            bank_address,
            bank_routing_number,
            bank_account_number,
            owner_name,
            bank_dob,
            bank_ssn,
            bank_address_2,
            bank_tel,
            exam_scheduled_date,
            examiner,
            note,
            tobacco_explain,
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
        })

        res.sendStatus(200)
    },
    deleteApplication: (req, res) => {
        const db = req.app.get('db')
        const { application_id } = req.body

        db.applications.delete_application({ application_id })

        res.sendStatus(200)
    },
    updateApplication: (req, res) => {
        const db = req.app.get('db')
        const { insured_name,
            gender,
            dob,
            ssn,
            address,
            years_at_this_address,
            tel,
            email,
            driver_license_number,
            exp,
            state,
            us_citizens,
            employer,
            start_date,
            work_address,
            occupation,
            duties,
            annual_income,
            annual_household_income,
            net_worth,
            product_type,
            coverage_amount,
            class_rating,
            planned_premium,
            term_years,
            replacement,
            purpose_of_insurance,
            ltc,
            living_benefits,
            lifetime_income_rider,
            other_rider,
            pb_name,
            pb_dob,
            pb_ssn,
            pb_relationship,
            pb2_name,
            pb2_dob,
            pb2_ssn,
            pb2_relationship,
            con_name,
            con_dob,
            con_ssn,
            con_relationship,
            con2_name,
            con2_dob,
            con2_ssn,
            con2_relationship,
            height,
            weight,
            tobacco,
            pb_or_cholesterol,
            pbc_explain,
            diabetes,
            diabetes_explain,
            surgery_history,
            surgery_history_explain,
            medication,
            father_liv,
            father_dead,
            father_cause,
            mother_liv,
            mother_dead,
            mother_cause,
            sib_liv,
            sib_dead,
            sib_cause,
            driving_history,
            pcp_name,
            pcp_tel,
            pcp_address,
            pcp_date_last,
            pcp_reason,
            bank_name,
            bank_address,
            bank_routing_number,
            bank_account_number,
            owner_name,
            bank_dob,
            bank_ssn,
            bank_address_2,
            bank_tel,
            exam_scheduled_date,
            examiner,
            note, tobacco_explain,
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
            application_id } = req.body

        db.applications.update_application({
            insured_name,
            gender,
            dob,
            ssn,
            address,
            years_at_this_address,
            tel,
            email,
            driver_license_number,
            exp,
            state,
            us_citizens,
            employer,
            start_date,
            work_address,
            occupation,
            duties,
            annual_income,
            annual_household_income,
            net_worth,
            product_type,
            coverage_amount,
            class_rating,
            planned_premium,
            term_years,
            replacement,
            purpose_of_insurance,
            ltc,
            living_benefits,
            lifetime_income_rider,
            other_rider,
            pb_name,
            pb_dob,
            pb_ssn,
            pb_relationship,
            pb2_name,
            pb2_dob,
            pb2_ssn,
            pb2_relationship,
            con_name,
            con_dob,
            con_ssn,
            con_relationship,
            con2_name,
            con2_dob,
            con2_ssn,
            con2_relationship,
            height,
            weight,
            tobacco,
            pb_or_cholesterol,
            pbc_explain,
            diabetes,
            diabetes_explain,
            surgery_history,
            surgery_history_explain,
            medication,
            father_liv,
            father_dead,
            father_cause,
            mother_liv,
            mother_dead,
            mother_cause,
            sib_liv,
            sib_dead,
            sib_cause,
            driving_history,
            pcp_name,
            pcp_tel,
            pcp_address,
            pcp_date_last,
            pcp_reason,
            bank_name,
            bank_address,
            bank_routing_number,
            bank_account_number,
            owner_name,
            bank_dob,
            bank_ssn,
            bank_address_2,
            bank_tel,
            exam_scheduled_date,
            examiner,
            note, tobacco_explain,
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
            application_id
        })

        res.sendStatus(200)
    },
    getApplication: async (req, res) => {
        const db = req.app.get('db')
        const { applicationId } = req.params

        const client = await db.applications.get_application({ applicationId })

        res.status(200).send(client)
    },
    getApplications: async (req, res) => {
        const db = req.app.get('db')
        const { clientId } = req.params

        const clients = await db.applications.get_applications({ clientId })

        res.status(200).send(clients)
    },
    // emailMeeting: async (req, res) => {
    //     const { name, date, notes, email } = req.body
    //     const nodemailer = require('nodemailer')
    //     const fs = require('fs')
    //     const PDFDocument = require('pdfkit');
    //     let transporter = nodemailer.createTransport({
    //         host: 'smtp.zoho.com',
    //         port: 465,
    //         //gmailPORT --> port: 587
    //         //service: 'gmail'
    //         secure: true,
    //         //gmailONLY --> requireTLS: true
    //         //You should include your email and password for this email account
    //         //to your .env file to keep that information secure
    //         auth: {
    //             user: 'testdevtest@zohomail.com',
    //             pass: 'Hello123.'
    //         }
    //     });

    //     const doc = new PDFDocument
    //     let buffers = []

    //     doc.on('data', buffers.push.bind(buffers))
    //     doc.on('end', function () {
    //         let pdfData = Buffer.concat(buffers)

    //         const mailOptions = {
    //             from: 'testdevtest@zohomail.com',
    //             to: `${email}`,
    //             attachments: [{
    //                 filename: `${name}.pdf`,
    //                 content: pdfData
    //             }]
    //         };
    //         mailOptions.subject = 'Client PDF';
    //         mailOptions.text = `${name}'s meeting PDF attached`;
    //         return transporter.sendMail(mailOptions).then(() => {
    //             console.log('email sent:');
    //         }).catch(error => {
    //             console.error('There was an error while sending the email:', error);
    //         });

    //     })
    //     doc
    //         .fontSize(30)
    //         .text('Meeting Notes', {
    //             align: 'center'
    //         });
    //     doc
    //         .fontSize(15)
    //         .text(`Name: ${name}`, 60, 135)
    //     doc
    //         .fontSize(15)
    //         .text(`Date: ${date}`, 60, 175)
    //     doc
    //         .fontSize(15)
    //         .text('Notes', 60, 215)
    //     doc
    //         .fontSize(13)
    //         .text(`${notes}`, 60, 255, {
    //             lineGap: 8
    //         })
    //     doc.end()
    // },
    emailApplication: async (req, res) => {
        const {
            name,
            gender,
            dateOfBirth,
            SSN,
            address,
            years_at_this_address,
            tel,
            email,
            driver_license_number,
            exp,
            state,
            us_citizens,
            employer,
            start_date,
            work_address,
            occupation,
            duties,
            annual_income,
            annual_household_income,
            net_worth,
            product_type,
            coverage_amount,
            class_rating,
            planned_premium,
            term_years,
            replacement,
            purpose_of_insurance,
            ltc,
            living_benefits,
            lifetime_income_rider,
            other_rider,
            pb_name,
            pb_dob,
            pb_ssn,
            pb_relationship,
            pb2_name,
            pb2_dob,
            pb2_ssn,
            pb2_relationship,
            con_name,
            con_dob,
            con_ssn,
            con_relationship,
            con2_name,
            con2_dob,
            con2_ssn,
            con2_relationship,
            height,
            weight,
            tobacco,
            pb_or_cholesterol,
            pbc_explain,
            diabetes,
            diabetes_explain,
            surgery_history,
            surgery_history_explain,
            medication,
            father_liv,
            father_dead,
            father_cause,
            mother_liv,
            mother_dead,
            mother_cause,
            sib_liv,
            sib_dead,
            sib_cause,
            driving_history,
            pcp_name,
            pcp_tel,
            pcp_address,
            pcp_date_last,
            pcp_reason,
            bank_name,
            bank_address,
            bank_routing_number,
            bank_account_number,
            owner_name,
            bank_dob,
            bank_ssn,
            bank_address_2,
            bank_tel,
            exam_scheduled_date,
            examiner,
            note,
            tobacco_explain,
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
            email1
        } = req.body
        const nodemailer = require('nodemailer')
        const fs = require('fs')
        const PDFDocument = require('pdfkit');
        let transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            //gmailPORT --> port: 587
            //service: 'gmail'
            secure: true,
            //gmailONLY --> requireTLS: true
            //You should include your email and password for this email account
            //to your .env file to keep that information secure
            auth: {
                user: 'testdevtest@zohomail.com',
                pass: 'Hello123.'
            }
        });

        const doc = new PDFDocument

        let buffers = []

        doc.on('data', buffers.push.bind(buffers))
        doc.on('end', function () {
            let pdfData = Buffer.concat(buffers)

            const mailOptions = {
                from: 'testdevtest@zohomail.com',
                to: `${email1}`,
                attachments: [{
                    filename: `${name}.pdf`,
                    content: pdfData
                }]
            };
            mailOptions.subject = 'Client PDF';
            mailOptions.text = `${name}'s Application PDF attached`;
            return transporter.sendMail(mailOptions).then(() => {
                console.log('email sent:');
            }).catch(error => {
                console.error('There was an error while sending the email:', error);
            });

        })
        doc
            .fontSize(20)
            .text('Client Data Form', {
                align: 'center'
            });
        doc
            .fontSize(15)
            .text('Proposed Insured Information', 60, 115, {
                underline: 'yes'
            })

        doc
            .fontSize(13)
            .text('Name: ____________________________________________     Gender: _______', 60, 150)

        //fill ins
        doc
            .fontSize(13)
            .text(`            ${name}`, 60, 150)
        doc
            .fontSize(13)
            .text(`                                                                                                                       ${gender}`, 60, 150)
        doc
            .fontSize(13)
            .text('DOB: __________________________     SSN/TIN#: ________________________', 60, 180)
        doc
            .fontSize(13)
            .text(`           ${dateOfBirth}`, 60, 180)
        doc
            .fontSize(13)
            .text(`                                                                                     ${SSN}`, 60, 180)
        doc
            .fontSize(13)
            .text('Address: __________________________________________________________', 60, 210)
        doc
            .fontSize(13)
            .text(`                ${address}`, 60, 210)
        doc
            .fontSize(13)
            .text('Tel: _________________     Years at this Address: _________________________', 60, 240)
        doc
            .fontSize(13)
            .text(`       ${tel}`, 60, 240)
        doc
            .fontSize(13)
            .text(`                                                                                 ${years_at_this_address}`, 60, 240)
        doc
            .fontSize(13)
            .text('Email: _____________________________________________________________', 60, 270)
        doc
            .fontSize(13)
            .text(`           ${email}`, 60, 270)
        doc
            .fontSize(13)
            .text('Driver License#: ___________    Exp: _______________     State: _____________', 60, 300)
        doc
            .fontSize(13)
            .text(`                           ${driver_license_number}`, 60, 300)
        doc
            .fontSize(13)
            .text(`                                                             ${exp}`, 60, 300)
        doc
            .fontSize(13)
            .text(`                                                                                                           ${state}`, 60, 300)

        doc
            .fontSize(13)
            .text(`Is the Insured a US citizen?  _____   If no, permanent resident/visa copy is required`, 60, 330)
        doc
            .fontSize(13)
            .text(`                                                ${us_citizens}`, 60, 330)
        doc
            .fontSize(13)
            .text(`Employer: ______________________________     Start Date: ________________`, 60, 360)
        doc
            .fontSize(13)
            .text(`                  ${employer}`, 60, 360)
        doc
            .fontSize(13)
            .text(`                                                                                                     ${start_date}`, 60, 360)
        doc
            .fontSize(13)
            .text(`Address: __________________________________________________________`, 60, 390)
        doc
            .fontSize(13)
            .text(`                 ${work_address}`, 60, 390)

        doc
            .fontSize(13)
            .text(`Occupation: _____________________     Duties: __________________________`, 60, 420)
        doc
            .fontSize(13)
            .text(`                     ${occupation}`, 60, 420)
        doc
            .fontSize(13)
            .text(`                                                                               ${duties}`, 60, 420)
        doc
            .fontSize(13)
            .text(`Annual Income: ______________   Annual Household Income: ______________`, 60, 450)

        doc
            .fontSize(13)
            .text(`                          ${annual_income}`, 60, 450)
        doc
            .fontSize(13)
            .text(`                                                                                                     ${annual_household_income}`, 60, 450)
        doc
            .fontSize(13)
            .text(`Net Worth: ________________________________________________________`, 60, 480)
        doc
            .fontSize(13)
            .text(`                  ${net_worth}`, 60, 480)
        doc
            .fontSize(15)
            .text('Application Information', 60, 515, {
                underline: 'yes'
            })
        doc
            .fontSize(13)
            .text(`Product Type/Name: ________________    Coverage Amount: $_______________`, 60, 550)
        doc
            .fontSize(13)
            .text(`                                  ${product_type}`, 60, 550)
        doc
            .fontSize(13)
            .text(`                                                                                                      ${coverage_amount}`, 60, 550)
        doc
            .fontSize(13)
            .text(`Class Rating: __________________    Planned Premium: $___________________`, 60, 580)
        doc
            .fontSize(13)
            .text(`                       ${class_rating}`, 60, 580)
        doc
            .fontSize(13)
            .text(`                                                                                               ${planned_premium}`, 60, 580)
        doc
            .fontSize(13)
            .text(`Term Years: _______________________     Replacement: ___________________`, 60, 610)
        doc
            .fontSize(13)
            .text(`                    ${term_years}`, 60, 610)
        doc
            .fontSize(13)
            .text(`                                                                                              ${replacement}`, 60, 610)
        doc
            .fontSize(13)
            .text(`Purpose Of Insurance: _______________________________________________`, 60, 640)
        doc
            .fontSize(13)
            .text(`                                      ${purpose_of_insurance}`, 60, 640)
        doc
            .fontSize(13)
            .text(`Riders: LTC/Chronic Illness: _____________     Living Benefits: _______________`, 60, 670)
        doc
            .fontSize(13)
            .text(`                                              ${ltc}`, 60, 670)
        doc
            .fontSize(13)
            .text(`                                                                                                      ${living_benefits}`, 60, 670)
        doc
            .fontSize(13)
            .text(`Lifetime Income Rider: __________________     Other Rider: _________________`, 60, 700)
        doc
            .fontSize(13)
            .text(`                                      ${lifetime_income_rider}`, 60, 700)
        doc
            .fontSize(13)
            .text(`                                                                                                   ${other_rider}`, 60, 700)
        doc.addPage()
        doc
            .fontSize(15)
            .text('Existing/Pending Coverage', 60, 70, {
                underline: 'yes'
            })
        doc
            .fontSize(13)
            .text(`Carrier       Face Amount    Policy Number    Issue Year   Surrender Value  Owner`, 60, 105)
        doc
            .fontSize(13)
            .text(`________   ___________    ___________    _______    ____________    _______`, 60, 135)
        doc
            .fontSize(10)
            .text(`${c1}`, 60, 135)
        doc
            .fontSize(10)
            .text(`                             ${fa}`, 60, 135)
        doc
            .fontSize(10)
            .text(`                                                              ${pn}`, 60, 135)
        doc
            .fontSize(10)
            .text(`                                                                                                  ${iy}`, 60, 135)
        doc
            .fontSize(10)
            .text(`                                                                                                                            ${sv}`, 60, 135)
        doc
            .fontSize(10)
            .text(`                                                                                                                                                       ${o}`, 60, 135)
        doc
            .fontSize(13)
            .text(`________   ___________    ___________    _______    ____________    _______`, 60, 165)
        doc
            .fontSize(10)
            .text(`${c2}`, 60, 165)
        doc
            .fontSize(10)
            .text(`                             ${fa2}`, 60, 165)
        doc
            .fontSize(10)
            .text(`                                                              ${pn2}`, 60, 165)
        doc
            .fontSize(10)
            .text(`                                                                                                  ${iy2}`, 60, 165)
        doc
            .fontSize(10)
            .text(`                                                                                                                            ${sv2}`, 60, 165)
        doc
            .fontSize(10)
            .text(`                                                                                                                                                       ${o2}`, 60, 165)
        doc
            .fontSize(13)
            .text(`Using funds from existing policies to pay premiums due on the new policy? _____ If yes, transfer/1035 form required`, 60, 200)
        doc
            .fontSize(13)
            .text(`                                                                                                                          ${tenthirtyfive}`, 60, 200)
        doc
            .fontSize(15)
            .text('Benificiary Information', 60, 250, {
                underline: 'yes'
            })
        doc
            .fontSize(13)
            .text('Primary Benificiary                                          Contingent', 60, 285)
        doc.fontSize(13)
            .text('Name: ________________________             Name: ________________________', 60, 315)
        doc
            .fontSize(13)
            .text(`            ${pb_name}`, 60, 315)
        doc
            .fontSize(13)
            .text(`                                                                                     ${con_name}`, 60, 315)
        doc.fontSize(13)
            .text('Date of Birth: ___________________            Date of Birth: ___________________', 60, 345)
        doc
            .fontSize(13)
            .text(`                       ${pb_dob}`, 60, 345)
        doc
            .fontSize(13)
            .text(`                                                                                               ${con_dob}`, 60, 345)
        doc.fontSize(13)
            .text('SSN#: ________________________             SSN#: ________________________', 60, 375)
        doc
            .fontSize(13)
            .text(`           ${pb_ssn}`, 60, 375)
        doc
            .fontSize(13)
            .text(`                                                                                    ${con_ssn}`, 60, 375)
        doc.fontSize(13)
            .text('Relationship: ___________________             Relationship: ___________________', 60, 405)
        doc
            .fontSize(13)
            .text(`                       ${pb_relationship}`, 60, 405)
        doc
            .fontSize(13)
            .text(`                                                                                               ${con_relationship}`, 60, 405)
        doc.fontSize(13)
            .text('Name: ________________________             Name: ________________________', 60, 435)
        doc
            .fontSize(13)
            .text(`            ${pb2_name}`, 60, 435)
        doc
            .fontSize(13)
            .text(`                                                                                     ${con2_name}`, 60, 435)
        doc.fontSize(13)
            .text('Date of Birth: ___________________            Date of Birth: ___________________', 60, 465)
        doc
            .fontSize(13)
            .text(`                       ${pb2_dob}`, 60, 465)
        doc
            .fontSize(13)
            .text(`                                                                                               ${con2_dob}`, 60, 465)
        doc.fontSize(13)
            .text('SSN#: ________________________             SSN#: ________________________', 60, 495)
        doc
            .fontSize(13)
            .text(`           ${pb2_ssn}`, 60, 495)
        doc
            .fontSize(13)
            .text(`                                                                                    ${con2_ssn}`, 60, 495)
        doc.fontSize(13)
            .text('Relationship: ___________________             Relationship: ___________________', 60, 525)
        doc
            .fontSize(13)
            .text(`                       ${pb2_relationship}`, 60, 525)
        doc
            .fontSize(13)
            .text(`                                                                                               ${con2_relationship}`, 60, 525)
        doc
            .fontSize(15)
            .text('Health Information', 60, 575, {
                underline: 'yes'
            })
        doc.fontSize(13)
            .text('Height: ______   Weight: ______   Tobacco: ____  If Yes, ____________________', 60, 605)
        doc
            .fontSize(13)
            .text(`             ${height}`, 60, 605)
        doc
            .fontSize(13)
            .text(`                                         ${weight}`, 60, 605)
        doc
            .fontSize(13)
            .text(`                                                                        ${tobacco}`, 60, 605)
        doc
            .fontSize(13)
            .text(`                                                                                           ${tobacco_explain}`, 60, 605)
        doc.fontSize(13)
            .text('Abnormal blood pressure or Cholesterols? ________________________________', 60, 635)
        doc
            .fontSize(13)
            .text(`                                                                      ${pb_or_cholesterol}`, 60, 635)
        doc.fontSize(13)
            .text('If yes, please describe: _______________________________________________', 60, 665)
        doc
            .fontSize(13)
            .text(`                                       ${pbc_explain}`, 60, 665)
        doc.addPage()
        doc.fontSize(13)
            .text('Diabetes? ________________________________', 60, 70)
        doc
            .fontSize(13)
            .text(`                  ${diabetes}`, 60, 70)
        doc.fontSize(13)
            .text('If yes, please describe: _______________________________________________', 60, 100)
        doc
            .fontSize(13)
            .text(`                                       ${diabetes_explain}`, 60, 100)
        doc.fontSize(13)
            .text('Any history of surgery or treatment? ________________________________', 60, 130)
        doc
            .fontSize(13)
            .text(`                                                            ${surgery_history}`, 60, 130)
        doc.fontSize(13)
            .text('If yes, please describe: _______________________________________________', 60, 160)
        doc
            .fontSize(13)
            .text(`                                       ${surgery_history_explain}`, 60, 160)
        doc.fontSize(13)
            .text('List any medication you currently are taking', 60, 190)
        doc.fontSize(13)
            .text('__________________________________________________________________', 60, 220)
        doc.fontSize(13)
            .text(`${medication}`, 60, 220, {
                lineGap: 10
            })
        doc.fontSize(13)
            .text('__________________________________________________________________', 60, 245)
        doc.fontSize(12)
            .text('Immediate Family Medical History', 60, 290)
        doc.fontSize(13)
            .text("                                Age if Living      Age at Death      Cause of Death", 60, 320)
        doc.fontSize(13)
            .text("Father                     __________      ___________      _____________", 60, 350)
        doc
            .fontSize(13)
            .text(`                                        ${father_liv}`, 60, 350)
        doc
            .fontSize(13)
            .text(`                                                                  ${father_dead}`, 60, 350)
        doc
            .fontSize(13)
            .text(`                                                                                          ${father_cause}`, 60, 350)
        doc.fontSize(13)
            .text("Mother                    __________      ___________      _____________", 60, 380)
        doc
            .fontSize(13)
            .text(`                                        ${mother_liv}`, 60, 380)
        doc
            .fontSize(13)
            .text(`                                                                  ${mother_dead}`, 60, 380)
        doc
            .fontSize(13)
            .text(`                                                                                          ${mother_cause}`, 60, 380)
        doc.fontSize(13)
            .text("Brother/Sister         __________      ___________      _____________", 60, 410)
        doc
            .fontSize(13)
            .text(`                                        ${sib_liv}`, 60, 410)
        doc
            .fontSize(13)
            .text(`                                                                  ${sib_dead}`, 60, 410)
        doc
            .fontSize(13)
            .text(`                                                                                          ${sib_cause}`, 60, 410)
        doc.fontSize(12)
            .text('Driving History', 60, 455)
        doc.fontSize(13)
            .text('Any moving violation/DUI/license suspension in the past 3 years?', 60, 485)
        doc.fontSize(13)
            .text('If yes, please describe: _______________________________________________', 60, 515)
        doc
            .fontSize(13)
            .text(`                                       ${driving_history}`, 60, 515)
        doc.fontSize(12)
            .text('Primary Care Physician', 60, 560)
        doc.fontSize(13)
            .text('Name: ___________________________      Tel: ___________________________', 60, 590)
        doc
            .fontSize(13)
            .text(`             ${pcp_name}`, 60, 590)
        doc
            .fontSize(13)
            .text(`                                                                                ${pcp_tel}`, 60, 590)
        doc.fontSize(13)
            .text('Address: __________________________________________________________', 60, 620)
        doc
            .fontSize(13)
            .text(`                 ${pcp_address}`, 60, 620)
        doc.fontSize(13)
            .text('Date Last Visited: ___________________________________________________', 60, 650)
        doc
            .fontSize(13)
            .text(`                              ${pcp_date_last}`, 60, 650)
        doc.fontSize(13)
            .text('Reason and Result: __________________________________________________', 60, 680)
        doc
            .fontSize(13)
            .text(`                                  ${pcp_reason}`, 60, 680)
        doc.addPage()
        doc.fontSize(15)
            .text('Bank Information', 60, 70, {
                underline: 'yes'
            })
        doc.fontSize(13)
            .text('Bank Name: ___________   Address: ____________________________________', 60, 110)
        doc
            .fontSize(13)
            .text(`                     ${bank_name}`, 60, 110)
        doc
            .fontSize(13)
            .text(`                                                             ${bank_address}`, 60, 110)
        doc.fontSize(13)
            .text('Routing#: _________________________     Account#: ______________________', 60, 140)
        doc
            .fontSize(13)
            .text(`                ${bank_routing_number}`, 60, 140)
        doc
            .fontSize(13)
            .text(`                                                                                        ${bank_account_number}`, 60, 140)
        doc.fontSize(13)
            .text('Owner Name: _____________     DOB: _________________     SSN: __________', 60, 170)
        doc
            .fontSize(13)
            .text(`                        ${owner_name}`, 60, 170)
        doc
            .fontSize(13)
            .text(`                                                                 ${bank_dob}`, 60, 170)
        doc
            .fontSize(13)
            .text(`                                                                                                                 ${bank_ssn}`, 60, 170)
        doc.fontSize(13)
            .text('Address: ___________________________________       Tel: _________________', 60, 200)
        doc
            .fontSize(13)
            .text(`               ${bank_address_2}`, 60, 200)
        doc
            .fontSize(13)
            .text(`                                                                                                   ${bank_tel}`, 60, 200)
        doc.fontSize(15)
            .text('Medical Exam Information', 60, 230, {
                underline: 'yes'
            })
        doc.fontSize(13)
            .text('Exam Scheduled Date: _______________________________________________', 60, 270)
        doc
            .fontSize(13)
            .text(`                                       ${exam_scheduled_date}`, 60, 270)
        doc.fontSize(13)
            .text('Examiner: _________________________________________________________', 60, 300)
        doc
            .fontSize(13)
            .text(`                  ${examiner}`, 60, 300)
        doc.fontSize(13)
            .text('NOTES', 60, 340)
        doc.fontSize(13)
            .text(`${note}`, 60, 370, {
                lineGap: 10
            })

        doc.end()
    },
}