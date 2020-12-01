require("dotenv").config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controllers/authCtrl')

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

app.listen(SERVER_PORT, console.log(`Server connected on port ${SERVER_PORT}`))