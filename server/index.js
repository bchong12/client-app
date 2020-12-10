require("dotenv").config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controllers/authCtrl')
const clientCtrl = require('./controllers/clientCtrl')
const meetingCtrl = require('./controllers/meetingCtrl')
const applicationCtrl = require('./controllers/applicationCtrl')

//create an instance of express
const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then((db) => {
    app.set("db", db);
    console.log("db is connected")
})

app.use(
    session({
        resave: true,
        saveUninitialized: true,
        secret: SESSION_SECRET
    })
)

//auth endpoints
app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get("/auth/me", authCtrl.me)
app.put("/agent/update", authCtrl.updateAgent)

//client endpoints
app.post('/client', clientCtrl.addClient)
app.delete('/client', clientCtrl.deleteClient)
app.put('/client', clientCtrl.updateClient)
app.get('/client/:clientId', clientCtrl.getClient)
app.get('/clients/:agentId', clientCtrl.getClients)

//meeting endpoints
app.post('/meeting', meetingCtrl.addMeeting)
app.delete('/meeting', meetingCtrl.deleteMeeting)
app.put('/meeting', meetingCtrl.updateMeeting)
app.get('/meeting/:meetingId', meetingCtrl.getMeeting)
app.get('/meetings/:clientId', meetingCtrl.getMeetings)
app.post('/meeting/email', meetingCtrl.emailMeeting)

//application endpoints
app.post('/application', applicationCtrl.addApplication)
app.delete('/application', applicationCtrl.deleteApplication)
app.put('/application', applicationCtrl.updateApplication)
app.get('/application/:applicationId', applicationCtrl.getApplication)
app.get('/applications/:clientId', applicationCtrl.getApplications)
app.post('/application/email', applicationCtrl.emailApplication)

app.listen(SERVER_PORT, console.log(`Server connected on port ${SERVER_PORT}`))