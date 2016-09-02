//this buffer will take the string "hello", the second parameter
//is what you will convert the string to using WHAT encoding
//you can use utf8 or base64 or anyhting else
var buf = new Buffer('Hello', 'utf8');

console.log(buf);

console.log(buf.toString(), "to string");

console.log(buf.toJSON());

console.log(buf[2], "buf[2]");

buf.write('wo');

console.log(buf.toString());

//stores raw binary data
var buffer = new ArrayBuffer(8);
//this is a new feature in javascript
//this means an array that can store 32 bits
var view = new Int32Array(buffer);

view[0] = 5;
view[1] = 15;
view[2] = 30;
console.log(view)

function greet(callback){
	console.log("greet is called");

	data = {
		name: 'John Doe'
	}
	callback(data);
}

greet(function(data){

	console.log("Hi my name is: " + data.name);

})