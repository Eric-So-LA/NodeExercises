"use strict";
var Events = require('events');
class Greetr extends Events {
	constructor(){

		super();
		this.greeting = 'Hello world';
	}
	greet(data){
		console.log("greeting...", this.greeting);
	this.emit('greet', data);
	}
}

module.exports = Greetr;