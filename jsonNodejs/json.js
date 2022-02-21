const fs = require("fs")
const details = {
    name:"Vaibhav",
    age:24,
    id:165
}

// console.log(details)

//JSON to object
let json = JSON.stringify(details)
console.log(json)

// object to JSON
let obj = JSON.parse(json)
console.log(obj)

