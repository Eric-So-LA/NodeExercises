var fs = require('fs');

var greetLocation = __dirname + '/greet.txt';
var greet = fs.readFileSync(greetLocation, 'utf8');

console.log(greet);

var greet2 = fs.readFile(greetLocation, 'utf8',
 function(err, data){
 	if(err){
 		console.log(err);
 	}
 	console.log(data);
})
console.log("DONE!");