const helper = require('../helper')

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

exports.index = function(req, res) {
    let result = {
        data: obj,
        status: 200
    }
    res.status(200).json(result)
}

exports.find = function(req, res) {
    find = helper.findData(obj, req.params.id)
    if(find != undefined) {
        let result = {
            data: find,
            status: 200
        }
        res.status(200).json(result)
    } else {
        let result = {
            message: "Data not found",
            status: 404
        }
        res.status(404).json(result)
    }
}