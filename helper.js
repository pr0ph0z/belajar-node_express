module.exports = {
    findData: function (obj, query, param = "id") {
        return obj.find(function(item) {
            return item[param] == query
        })
    }
}