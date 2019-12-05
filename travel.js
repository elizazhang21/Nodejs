var fs = require('fs');
var path = require('path');

function travel(dir, callback) {
	fs.readdirSync(dir).forEach(function (file) {
		var pathname = path.join(dir, file);
		if (fs.statSync(pathname).isDirectory()){
			travel(pathname, callback);

		} else{
			callback(pathname);
		}

	});	

}

travel('/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld', function (pathname) {
    console.log(pathname);
});


/*
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/buffer.js
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/copy.js
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/file.js
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/hello-world.js
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/stream.js
/Users/Elizabeth.Ke.Zhang/Desktop/projects/helloworld/travel.js
(base) Elizabeth.Ke.Zhang@ZhangKes-MacBook-Pro ~ % 
*/