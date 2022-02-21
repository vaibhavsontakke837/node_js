const url = require("url")

const myUrl = new URL("https://www.geeksforgeeks.org/node-js-url-method/doo#demo")

console.log(myUrl.protocol)
console.log(myUrl.host)
console.log(myUrl.hostname)
console.log(myUrl.port)
console.log(myUrl.pathname)
console.log(myUrl.hash)

