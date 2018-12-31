const express = require('express')

const app = express()
const port = 8080

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

app.get('/', function(req, res) {
    res.send("Lg ap?")
})

app.get('/users', function(req,res) {
    res.send(JSON.stringify(obj))
})

app.get('/user/:id', function(req, res) {
    if (obj[req.params.id]) {
        res.send(JSON.stringify(obj[req.params.id]))
    } else {
        res.send("No data found!")
    }
})

app.listen(port, function() {
    console.log("App listening on port %d", port)
})