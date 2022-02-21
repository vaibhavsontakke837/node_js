// const event = require("events")
const events = require("events")
const event = new events.EventEmitter();

//create event handler
event.on("checkPage",(age)=>{
    console.log(`My age is ${age}`)
})

//fire the event
event.emit("checkPage",24)
