const EventEmitter = require("events");
const eventEmitter= new EventEmitter();

eventEmitter.on("DoorbellRing",()=>{
console.log("Open The Door!")});

eventEmitter.emit("DoorbellRing")
