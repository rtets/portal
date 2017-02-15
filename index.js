var express = require('express')

var config = require('./config.json')

var app = express()

var api = require('./api')

app.use('/api', api);
app.use('/', express.static(__dirname + '/static')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect jquery JS
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/react/dist')); // redirect react JS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect fonts bootstrap

app.listen(config.port, function () {
    console.log('listening on port ' +  config.port)
})
