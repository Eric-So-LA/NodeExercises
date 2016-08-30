'use strict';


var Greetr = require('./greetr');
var util = require('util');


var greetr1 = new Greetr();

greetr1.on('greet', function(data){
	console.log("someone greeted!" + data);
})

greetr1.greet('Ericc!!');


