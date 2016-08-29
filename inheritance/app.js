var Events = require('events');

var util = require('util');

function Greetr(){
	Events.call(this);
	this.greeting = 'Hello World';
}

util.inherits(Greetr, Events);

Greetr.prototype.greet = function(data){
	console.log("greeting...", this.greeting);
	this.emit('greet', data);
}
var greetr1 = new Greetr();

greetr1.on('greet', function(data){
	console.log("someone greeted!" + data);
})

greetr1.greet('Ericc!!');


