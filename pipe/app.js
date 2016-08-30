var fs = require('fs');
var zlib = require('zlib');

//you can stream things to anything that is a stream
//a file or internet connection are streams

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')
//this creates a transform stream that is readable and writable
//it compresses the chunk each time it receives a piece of data
//you can also pipe its output to another writable stream

var gzip = zlib.createGzip();
//gzip will compress the data then we will send the compressed data to the file
readable.pipe(gzip).pipe(compressed);
