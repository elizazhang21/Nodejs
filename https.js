var http = require('http');
var fs = require('fs')

var options = {
    key: fs.readFileSync('./ssl/default.key'),
    cert: fs.readFileSync('./ssl/default.cer')
    // rejectUnauthorized: false
};

var server = https.creatServer(options, function (request, response){
    // ...
}) 

server.addContext('foo.com', {
    key: fs.readFileSync('./ssl/foo.com.key'),
    cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
    key: fs.readFileSync('./ssl/bar.com.key'),
    cert: fs.readFileSync('./ssl/bar.com.cer')
})

var options = {
        hostname: 'www.example.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

var request = https.request(options, function (response) {});

request.end();

