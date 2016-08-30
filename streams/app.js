//streams that are created are event emitters
//so they have "on" and "emit"

//theres a variety of streams

//readable, writable, duplex, transform, pass through

//readable = you can only read data thats coming through
//writable = you can send data
//duplex is both!
//transform is you can change data as it moves through the stream

//readable inherits from stream

//streams are an abstract class

//an abstract class is one you only inherit from 
//so you can inherit it to build your own streams

var fs = require('fs');

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', 	highWaterMark: 4 * 1024});

readable.on('data', function(chunk){
	console.log(chunk.length);
	writable.write(chunk);
})