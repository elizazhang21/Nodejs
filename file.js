var fs = require('fs')
var rs = fs.createReadStream(pathname);

rs.readFile(pathname, function(err,data){
	if (err) {
		//Deal with error.
	} else {
		//Deal with data
	}
});


try {
	var data = fs.readFileSync(pathname);
	// Deal with data.	
} catch (err) {
	// Deal with error.
}

var cache = {};
function store(key, value){
	cache[path.normalize(key)] = value;
}

store('foo/bar', 1);
store('foo//baz//..//bar', 2);
console.log(cache); // => {'foo/bar':2}


path.join('foo/', 'baz/', '../bar');

path.extname('foo/bar.js'); // =>',js'