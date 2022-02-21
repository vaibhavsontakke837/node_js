// var http = require('http');

// //create a server object:
// http.createServer(function (req, res) {
//   res.write('Hello World!'); //write a response to the client
//   res.end(); //end the response
// }).listen(8080); //the server object listens on port 8080







const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) =>{


    // res.write("Server Created...")
    // console.log(req.url)
    if(req.url == "/"){
        res.end("This is From Home Page...")
    }else if(req.url == "/about"){
        res.end("This is From About Page...")
    }else if(req.url == "/userapi"){
       fs.readFile(`${__dirname}/userApi/api.json`,"utf-8",(err,data)=>{
           console.log(data)
           res.end(data)
        })
    }else{
        res.writeHead(404 , {"Content-type" : "text/html"})
        res.end("<h1>404 Page Not Found</h1>")
    }
    res.end()
    
})

server.listen(5000,()=>{
    console.log("Sever Created")
})

