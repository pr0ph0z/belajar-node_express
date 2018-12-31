const express = require('express')
const bodyParser = require('body-parser')
const helper = require('./helper')

const app = express()
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let obj = [
    {
        id: 1,
        name: "Mohamad Radisha",
        favorite: "NodeJS"
    },
    {
        id: 2,
        name: "rwxds",
        favorite: "Scala"
    },
    {
        id: 3,
        name: "0x726473",
        favorite: "Elixir"
    }
]

app.get('/', (req, res) => {
    res.send("Lg ap?")
})

app.get('/users', (req, res) => {
    res.send(JSON.stringify(obj))
})

app.get('/user/:id', (req, res) => {
    find = helper.findData(obj, req.params.id)
    res.send((find == undefined ? "No data found!" : find))
})

app.post('/user', (req, res) => {
    res.send(Object.keys(req.body).length != 0 ? req.body : "No data sent!")
})

app.put('/user/:id', (req, res) => {
    find = helper.findData(obj, req.params.id)
    if(find != undefined) {
        let result = {
            id: req.params.id,
            data: req.body
        }
        res.send(JSON.stringify(result))
    } else {
        res.send("No data found!")
    }
})

app.listen(port, function() {
    console.log("App listening on port %d", port)
})