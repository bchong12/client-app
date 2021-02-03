const { info } = require('pdfkit')


module.exports = {
    addMeeting: (req, res) => {
        const db = req.app.get('db')
        const { client_id, notes, date, name } = req.body

        db.meetings.add_meeting({ client_id, notes, date, name })

        res.sendStatus(200)
    },
    deleteMeeting: (req, res) => {
        const db = req.app.get('db')
        const { meeting_id } = req.body

        db.meetings.delete_meeting({ meeting_id })

        res.sendStatus(200)
    },
    updateMeeting: (req, res) => {
        const db = req.app.get('db')
        const { name, date, notes, meeting_id } = req.body

        db.meetings.update_meeting({ name, date, notes, meeting_id })

        res.sendStatus(200)
    },
    getMeeting: async (req, res) => {
        const db = req.app.get('db')
        const { meetingId } = req.params

        const client = await db.meetings.get_meeting({ meeting_id: meetingId })

        res.status(200).send(client)
    },
    getMeetings: async (req, res) => {
        const db = req.app.get('db')
        const { clientId } = req.params

        const clients = await db.meetings.get_meetings({ client_id: clientId })

        res.status(200).send(clients)
    },
    emailMeeting: async (req, res) => {
        const { name, date, notes, email } = req.body
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
                to: `${email}`,
                attachments: [{
                    filename: `${name}.pdf`,
                    content: pdfData
                }]
            };
            mailOptions.subject = 'Client PDF';
            mailOptions.text = `${name}'s meeting PDF attached`;
            return transporter.sendMail(mailOptions).then(() => {
                console.log('email sent:');
            }).catch(error => {
                console.error('There was an error while sending the email:', error);
            });

        })
        let fontpath = __dirname + "/NanumGothic-Regular.ttf"
        doc.font(fontpath)
        doc
            .fontSize(30)
            .text('Meeting Notes', {
                align: 'center'
            });
        doc
            .fontSize(15)
            .font("NanumGothic")
            .text(`Name: ${name}`, 60, 135)
        doc
            .fontSize(15)
            .font("NanumGothic")
            .text(`Date: ${date}`, 60, 175)
        doc
            .fontSize(15)
            .font("NanumGothic")
            .text('Notes', 60, 215)
        doc
            .fontSize(13)
            .font("NanumGothic")
            .text(`${notes}`, 60, 255, {
                lineGap: 8
            })
        doc.end()
    },

}