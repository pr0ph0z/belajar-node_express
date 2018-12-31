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
    let result = {
        data: obj,
        status: 200
    }
    res.json(result, 200)
})

app.get('/user/:id', (req, res) => {
    find = helper.findData(obj, req.params.id)
    if(find != undefined) {
        let result = {
            data: find,
            status: 200
        }
        res.json(result, 200)
    } else {
        let result = {
            message: "Data not found",
            status: 404
        }
        res.json(result, 404)
    }
})

app.post('/users', (req, res) => {
    if(Object.keys(req.body).length != 0) {
        let result = {
            data: req.body,
            message: "Data saved",
            status: 200
        }
        res.json(result, 200)
    } else {
        let result = {
            data: req.body,
            message: "Something went wrong",
            status: 400
        }
        res.json(result, 400)
    }
})

app.put('/user/:id', (req, res) => {
    find = helper.findData(obj, req.params.id)
    if(find != undefined) {
        let result = {
            id: req.params.id,
            data: req.body,
            message: "Data updated",
            status: 200
        }
        res.json(result, 200)
    } else {
        let result = {
            id: req.params.id,
            message: "No data found!",
            status: 404
        }
        res.json(result, 200)
    }
})

app.delete('/user/:id', (req, res) => {
    find = helper.findData(obj, req.params.id)
    if(find != undefined) {
        let result = {
            id: req.params.id,
            message: "Data deleted",
            status: 200
        }
        res.json(result, 200)
    } else {
        let result = {
            id: req.params.id,
            message: "Not found",
            status: 404
        }
        res.json(result, 200)
    }
})

app.listen(port, function() {
    console.log("App listening on port %d", port)
})