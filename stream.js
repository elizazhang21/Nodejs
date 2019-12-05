var fs = require('fs');

var rs = fs.createReadStream(pathname);

rs.on('data', function (chunk){
	doSomething(chunk);
})

rs.on('end', function (){
	cleanUp();
})


var rs = fs.createReadStream(src);

rs.on('data', function (chunk){
	rs.pause();
	doSomething(chunk, function(){
		rs.resume();
	})
})

rs.on('end', function(){
	cleanUp
})


var rs = fs.createReadStream(src);
var ws = fs.createWriteStream(dst);

rs.on('data', function(chunk){
	ws.write(chunk);
})

rs.on('end', function(){
	ws.end()
})
