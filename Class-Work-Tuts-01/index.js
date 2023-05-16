const logEvt = require("./LogEvt");
// const { EventEmitter } = require("events");

// const myEmitter = new EventEmitter();

// myEmitter.once("newListener", (event, listener) => {
//   if (event === "Events") {
//     setTimeout(() => {
//       listener("Events emitted");
//     }, 2000);
//   }
// });

// myEmitter.on("Events", logEvt);


const {EventEmitter} = require('node:events')

// INITIALIZING EVENT OBJECTS

const myEmitter = new EventEmitter()

myEmitter.on('log',(msg) => logEvt(msg));



setTimeout(() => {
    myEmitter.emit('log', 'emmitted')
}, 2000)