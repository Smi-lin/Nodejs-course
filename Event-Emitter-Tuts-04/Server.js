const logEvent = require("./logEvent")

// logEvent();

const EventEmitter = require("events")

class MyEmitter extends EventEmitter {};

// INITIALIZING EVENT OBJECT
const myEmitter = new MyEmitter();

// ADDING EVENT LISTENER
myEmitter.on('log',(msg) =>logEvent(msg));

setTimeout(() => { 
    myEmitter.emit('log', 'Events emitted ');
},2000)

