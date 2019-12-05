/* buffer */

var bin = new Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var sub = bin.slice(2);

var buf;
if (Buffer.alloc) {
	buf = Buffer.alloc(number);	
} else {
	buf = new Buffer(number);
	buf.fill(0);
}

const buf = Buffer.alloc ? Buffer.alloc(number) : new Buffer(number).fill(0);


sub[0] = 0x65;
console.log(bin);

var bin = new Buffer([0x68, 0x65, 0x6c, 0x6c, 0x6f]);
var dup = new Buffer(bin.length);

bin.copy(dup);
dup[0] = 0x48;
console.log(bin); // => <Buffer 68, 65 6c 6c 6f>
console.log(dup); // => <Buffer 68, 65 6c 6c 6f>