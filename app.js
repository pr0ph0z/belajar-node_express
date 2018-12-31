const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const helper = require('./helper')

const user_route = require('./Routes/user_route')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user(s|\/.*)', user_route)

app.listen(port, function() {
    console.log("App listening on port %d", port)
})