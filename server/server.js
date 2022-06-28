var express = require('express')
var bodyParser = require("body-parser")
var fs = require("fs")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
    next()
})

app.get('/api/courses', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    fs.readFile("Courses.json", 'utf8', function (err, data) {
        res.write(data)
        res.end()
    })
})

app.post('/api/courses', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    data = '{"Success:":"200"}'
    res.write(data)
    res.end()
})

app.put('/api/courses/:courseId', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    data = '{"Success:":"200"}'
    res.write(data)
    res.end()
})

app.delete('/api/courses/:courseId', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    data = '{"Success:":"200"}'
    res.write(data)
    res.end()
})

var server = app.listen(8080, function () {
    console.log('Node server is running..')
})

