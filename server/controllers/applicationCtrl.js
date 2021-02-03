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
        let fontpath = __dirname + "/NanumGothic-Regular.ttf"
        doc.font(fontpath)
        doc
            .fontSize(20)
            .text('Client Data Form', {
                align: 'center'
            });
        doc
            .fontSize(15)
            .font("NanumGothic")
            .text('Proposed Insured Information', 60, 115, {
                underline: 'yes'
            })

        doc
            .fontSize(13)
            .font("NanumGothic")
            .text('Name: ____________________________________________     Gender: _______', 60, 150)

        //fill ins
        doc
            .fontSize(13).font("NanumGothic")
            .text(`            ${name}`, 60, 150)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                                       ${gender}`, 60, 150)
        doc
            .fontSize(13).font("NanumGothic")
            .text('DOB: __________________________     SSN/TIN#: ________________________', 60, 180)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`           ${dateOfBirth}`, 60, 180)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                     ${SSN}`, 60, 180)
        doc
            .fontSize(13).font("NanumGothic")
            .text('Address: __________________________________________________________', 60, 210)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                ${address}`, 60, 210)
        doc
            .fontSize(13).font("NanumGothic")
            .text('Tel: _________________     Years at this Address: _________________________', 60, 240)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`       ${tel}`, 60, 240)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                 ${years_at_this_address}`, 60, 240)
        doc
            .fontSize(13).font("NanumGothic")
            .text('Email: _____________________________________________________________', 60, 270)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`           ${email}`, 60, 270)
        doc
            .fontSize(13).font("NanumGothic")
            .text('Driver License#: ___________    Exp: _______________     State: _____________', 60, 300)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                           ${driver_license_number}`, 60, 300)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                             ${exp}`, 60, 300)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                           ${state}`, 60, 300)

        doc
            .fontSize(13).font("NanumGothic")
            .text(`Is the Insured a US citizen?  _____   If no, permanent resident/visa copy is required`, 60, 330)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                ${us_citizens}`, 60, 330)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Employer: ______________________________     Start Date: ________________`, 60, 360)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                  ${employer}`, 60, 360)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                    ${start_date}`, 60, 360)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Address: __________________________________________________________`, 60, 390)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                ${work_address}`, 60, 390)

        doc
            .fontSize(13).font("NanumGothic")
            .text(`Occupation: _____________________     Duties: __________________________`, 60, 420)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                     ${occupation}`, 60, 420)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                ${duties}`, 60, 420)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Annual Income: ______________   Annual Household Income: ______________`, 60, 450)

        doc
            .fontSize(13).font("NanumGothic")
            .text(`                            ${annual_income}`, 60, 450)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                        ${annual_household_income}`, 60, 450)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Net Worth: ________________________________________________________`, 60, 480)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                    ${net_worth}`, 60, 480)
        doc
            .fontSize(15).font("NanumGothic")
            .text('Application Information', 60, 515, {
                underline: 'yes'
            })
        //here
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Product Type/Name: ______________    Coverage Amount: $_____________`, 60, 550)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                   ${product_type}`, 60, 550)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                      ${coverage_amount}`, 60, 550)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Class Rating: __________________    Planned Premium: $___________________`, 60, 580)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                       ${class_rating}`, 60, 580)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${planned_premium}`, 60, 580)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Term Years: _______________________     Replacement: ___________________`, 60, 610)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                    ${term_years}`, 60, 610)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                              ${replacement}`, 60, 610)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Purpose Of Insurance: _______________________________________________`, 60, 640)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                      ${purpose_of_insurance}`, 60, 640)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Riders: LTC/Chronic Illness: _____________     Living Benefits: _______________`, 60, 670)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                              ${ltc}`, 60, 670)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                      ${living_benefits}`, 60, 670)
        //here
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Lifetime Income Rider: ________________     Other Rider: _______________`, 60, 700)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${lifetime_income_rider}`, 60, 700)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${other_rider}`, 60, 700)
        doc.addPage()
        doc
            .fontSize(15).font("NanumGothic")
            .text('Existing/Pending Coverage', 60, 70, {
                underline: 'yes'
            })
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Carrier       Face Amount    Policy Number    Issue Year   Surrender Value  Owner`, 60, 105)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`________   ___________    ___________    _______    ____________    _______`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`${c1}`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                           ${fa}`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                            ${pn}`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                            ${iy}`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                                                      ${sv}`, 60, 135)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                                                                                      ${o}`, 60, 135)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`________   ___________    ___________    _______    ____________    _______`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`${c2}`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                           ${fa2}`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                            ${pn2}`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                            ${iy2}`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                                                      ${sv2}`, 60, 165)
        doc
            .fontSize(10).font("NanumGothic")
            .text(`                                                                                                                                                      ${o2}`, 60, 165)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`Using funds from existing policies to pay premiums due on the new policy? _____ If yes, transfer/1035 form required`, 60, 200)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                                          ${tenthirtyfive}`, 60, 200)
        doc
            .fontSize(15).font("NanumGothic")
            .text('Benificiary Information', 60, 250, {
                underline: 'yes'
            })
        doc
            .fontSize(13).font("NanumGothic")
            .text('Primary Benificiary                                          Contingent', 60, 285)
        doc.fontSize(13).font("NanumGothic")
            .text('Name: ________________________             Name: ________________________', 60, 315)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`            ${pb_name}`, 60, 315)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                     ${con_name}`, 60, 315)
        doc.fontSize(13).font("NanumGothic")
            .text('Date of Birth: ___________________           Date of Birth: ___________________', 60, 345)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                       ${pb_dob}`, 60, 345)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${con_dob}`, 60, 345)
        doc.fontSize(13).font("NanumGothic")
            .text('SSN#: ________________________              SSN#: ________________________', 60, 375)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`           ${pb_ssn}`, 60, 375)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                    ${con_ssn}`, 60, 375)
        doc.fontSize(13).font("NanumGothic")
            .text('Relationship: __________________             Relationship: ___________________', 60, 405)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                       ${pb_relationship}`, 60, 405)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${con_relationship}`, 60, 405)
        doc.fontSize(13).font("NanumGothic")
            .text('Name: ________________________             Name: ________________________', 60, 435)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`            ${pb2_name}`, 60, 435)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                     ${con2_name}`, 60, 435)
        doc.fontSize(13).font("NanumGothic")
            .text('Date of Birth: ___________________           Date of Birth: ___________________', 60, 465)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                       ${pb2_dob}`, 60, 465)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${con2_dob}`, 60, 465)
        doc.fontSize(13).font("NanumGothic")
            .text('SSN#: ________________________              SSN#: ________________________', 60, 495)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`           ${pb2_ssn}`, 60, 495)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                    ${con2_ssn}`, 60, 495)
        doc.fontSize(13).font("NanumGothic")
            .text('Relationship: ___________________             Relationship: ___________________', 60, 525)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                       ${pb2_relationship}`, 60, 525)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                               ${con2_relationship}`, 60, 525)
        doc
            .fontSize(15).font("NanumGothic")
            .text('Health Information', 60, 575, {
                underline: 'yes'
            })
        doc.fontSize(13).font("NanumGothic")
            .text('Height: ______   Weight: ______   Tobacco: ____  If Yes, ____________________', 60, 605)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`             ${height}`, 60, 605)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                         ${weight}`, 60, 605)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                        ${tobacco}`, 60, 605)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                             ${tobacco_explain}`, 60, 605)
        //here
        doc.fontSize(13).font("NanumGothic")
            .text('Abnormal blood pressure or Cholesterols? ______________________________', 60, 635)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                      ${pb_or_cholesterol}`, 60, 635)
        doc.fontSize(13).font("NanumGothic")
            .text('If yes, please describe: _______________________________________________', 60, 665)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${pbc_explain}`, 60, 665)
        doc.addPage()
        doc.fontSize(13).font("NanumGothic")
            .text('Diabetes? ________________________________', 60, 70)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                  ${diabetes}`, 60, 70)
        doc.fontSize(13).font("NanumGothic")
            .text('If yes, please describe: _______________________________________________', 60, 100)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${diabetes_explain}`, 60, 100)
        doc.fontSize(13).font("NanumGothic")
            .text('Any history of surgery or treatment? ________________________________', 60, 130)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                              ${surgery_history}`, 60, 130)
        doc.fontSize(13).font("NanumGothic")
            .text('If yes, please describe: _______________________________________________', 60, 160)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${surgery_history_explain}`, 60, 160)
        doc.fontSize(13).font("NanumGothic")
            .text('List any medication you currently are taking', 60, 190)
        doc.fontSize(13).font("NanumGothic")
            .text('__________________________________________________________________', 60, 220)
        doc.fontSize(13).font("NanumGothic")
            .text(`${medication}`, 60, 220, {
                lineGap: 10
            })
        doc.fontSize(13).font("NanumGothic")
            .text('__________________________________________________________________', 60, 245)
        doc.fontSize(12).font("NanumGothic")
            .text('Immediate Family Medical History', 60, 290)
        doc.fontSize(13).font("NanumGothic")
            .text("                                Age if Living      Age at Death      Cause of Death", 60, 320)
        doc.fontSize(13).font("NanumGothic")
            .text("Father                     __________      ___________      _____________", 60, 350)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                  ${father_liv}`, 60, 350)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                           ${father_dead}`, 60, 350)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                      ${father_cause}`, 60, 350)
        doc.fontSize(13).font("NanumGothic")
            .text("Mother                    __________      ___________      _____________", 60, 380)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                  ${mother_liv}`, 60, 380)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                           ${mother_dead}`, 60, 380)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                      ${mother_cause}`, 60, 380)
        doc.fontSize(13).font("NanumGothic")
            .text("Brother/Sister         __________      ___________      _____________", 60, 410)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                  ${sib_liv}`, 60, 410)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                           ${sib_dead}`, 60, 410)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                      ${sib_cause}`, 60, 410)
        doc.fontSize(12).font("NanumGothic")
            .text('Driving History', 60, 455)
        doc.fontSize(13).font("NanumGothic")
            .text('Any moving violation/DUI/license suspension in the past 3 years?', 60, 485)
        doc.fontSize(13).font("NanumGothic")
            .text('If yes, please describe: _______________________________________________', 60, 515)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${driving_history}`, 60, 515)
        doc.fontSize(12).font("NanumGothic")
            .text('Primary Care Physician', 60, 560)
        doc.fontSize(13).font("NanumGothic")
            .text('Name: ___________________________      Tel: ___________________________', 60, 590)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`             ${pcp_name}`, 60, 590)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                               ${pcp_tel}`, 60, 590)
        doc.fontSize(13).font("NanumGothic")
            .text('Address: __________________________________________________________', 60, 620)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                 ${pcp_address}`, 60, 620)
        doc.fontSize(13).font("NanumGothic")
            .text('Date Last Visited: ___________________________________________________', 60, 650)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                              ${pcp_date_last}`, 60, 650)
        doc.fontSize(13).font("NanumGothic")
            .text('Reason and Result: __________________________________________________', 60, 680)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                  ${pcp_reason}`, 60, 680)
        doc.addPage()
        doc.fontSize(15).font("NanumGothic")
            .text('Bank Information', 60, 70, {
                underline: 'yes'
            })
        doc.fontSize(13).font("NanumGothic")
            .text('Bank Name: ___________   Address: ____________________________________', 60, 110)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                     ${bank_name}`, 60, 110)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                             ${bank_address}`, 60, 110)
        doc.fontSize(13).font("NanumGothic")
            .text('Routing#: _________________________     Account#: ______________________', 60, 140)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                   ${bank_routing_number}`, 60, 140)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                         ${bank_account_number}`, 60, 140)
        doc.fontSize(13).font("NanumGothic")
            .text('Owner Name: _____________     DOB: _________________     SSN: __________', 60, 170)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                        ${owner_name}`, 60, 170)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                 ${bank_dob}`, 60, 170)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                                ${bank_ssn}`, 60, 170)
        doc.fontSize(13).font("NanumGothic")
            .text('Address: ___________________________________       Tel: _________________', 60, 200)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                ${bank_address_2}`, 60, 200)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                                                                                   ${bank_tel}`, 60, 200)
        doc.fontSize(15).font("NanumGothic")
            .text('Medical Exam Information', 60, 230, {
                underline: 'yes'
            })
        doc.fontSize(13).font("NanumGothic")
            .text('Exam Scheduled Date: _______________________________________________', 60, 270)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                                       ${exam_scheduled_date}`, 60, 270)
        doc.fontSize(13).font("NanumGothic")
            .text('Examiner: _________________________________________________________', 60, 300)
        doc
            .fontSize(13).font("NanumGothic")
            .text(`                  ${examiner}`, 60, 300)
        doc.fontSize(13).font("NanumGothic")
            .text('NOTES', 60, 340)
        doc.fontSize(13).font("NanumGothic")
            .text(`${note}`, 60, 370, {
                lineGap: 10
            })

        doc.end()
    },
}