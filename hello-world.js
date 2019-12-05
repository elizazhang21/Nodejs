// Practice 1 
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, World!\n');
});


server.listen(port, hostname,() => {
	console.log(`Server running at http://${hostname}:${port}/`);
});


// Practice 2
var title = 'JavaScript console in Sublime Text'
console.log(title)


// Practice 3
var http = require('http')

http.createServer((req,res) {
	res.setHead('Content-Type':'text/plain');
	res.end('Hello, World!');
}).listen(8080);

