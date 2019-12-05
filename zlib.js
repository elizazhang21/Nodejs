var http = require('http')
var zlib = require('zlib')

http.createServer(function (req,res){
	var i = 1024,
		data = '';

	while (i--) {
		data += ".";
	}

	if ((req.headers['accept-encoding'] ||'').indexOf('gzip')!== -1){
		zlib.gzip(data, function(err, data){
			res.writeHead(200, {
				'Content-Type': 'text/plain',
				'Content-Encoding':'gzip'
			});
			res.end(data);

		});
	}
	else {
		res.writeHead(200, {
			'Content-Type' : 'text/plain'
		});
		res.end(data);
	}
}).listen(82)


var options = {
	hostname: 'www.example.com',
    port: 80,
    path: '/',
    method: 'GET',
    headers: {
        'Accept-Encoding': 'gzip, deflate'
    }
};

http.request(options, function (response) {
    var body = [];

    response.on('data', function (chunk) {
        body.push(chunk);
    });

    response.on('end', function () {
        body = Buffer.concat(body);

        if (response.headers['content-encoding'] === 'gzip') {
            zlib.gunzip(body, function (err, data) {
                console.log(data.toString());
            });
        } else {
            console.log(data.toString());
        }
    });
}).end();