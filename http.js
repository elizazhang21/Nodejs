var http = require('http');

/*
http.createServer(function (req,res) {
	res.writeHead(200, {'Content-Type':'text-plain'});
	res.end('Hello World\n')
	console.log(req.methos);
	console.log(req.headers);
}).listen(8123)
*/


// POST / HTTP/1.1
// User-Agent: curl/7.26.0
// Host: localhost
// Accept: */*
// Content-Length: 11
// Content-Type: application/x-www-form-urlencoded

// Hello World

/*
http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(80);
*/

var options = {
	hostname : 'www.example.com',
	port: 80,
	path:'/upload',
	method:'POST',
	headers:{
		'Content-Type':'application/x-www-form-urlencoded'
	}	
};

var request = http.request(options, function(res) {});

request.write('Hello World');
request.end()

http.get('http://www.example.com/', function (response) {
    var body = [];

    console.log(response.statusCode);
    console.log(response.headers);

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
});

