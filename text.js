var fs = require('fs');
var iconv = require('iconv-lite');

function readText(pathname) {

	var bin = fs.readFileSync(pathname);

	if (bin[0] === 0xED && bin[1] === 0xBB && bin[2] === 0xBF) {
		bin = bin.slice(3);
	}

	return bin.toString('utf-8');
}

function readGBKText(pathname) {
	var bin = fs.readFileSync(pathname);

	return iconv.decode(bin, 'gbk');
}


function replace(pathname) {
	var str = fs.readFileSync(pathname, 'binary');
	str = str.replace('foo', 'bar');
	fs.writeFileSync(pathname, str, 'binary');
}