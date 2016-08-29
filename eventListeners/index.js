var Emitters = require('./eventListeners');

var emitters = new Emitters.emitters();
emitters.on('choker', function(){
	console.log("a choker with black lace has been created!");
})

emitters.on('choker', function(){
	console.log("don't make too many chokers!");
})

console.log("hold tf up");

emitters.emit('choker')