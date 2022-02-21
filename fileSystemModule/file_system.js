

// //read file

//Asynchronous
// fs.readFile("demo.txt",(err,data) =>{
//     if(err){
//         return console.error(err)
//     }
//     console.log(data.toString());
// })

//Synchronous
// const read = fs.readFileSync("demo.txt","utf-8")
// console.log(read)

console.log("Ended")

//rename file
// fs.renameSync("demo","demo.js")

//open file


// //delete file
// fs.unlinkSync("demo.txt")


//create folder
// fs.mkdirSync("FileMoule")

//create file
// fs.writeFileSync("./FileModule/demo.txt","First Line From demo.txt")

// fs.unlinkSync("./FileModule/demo.txt")

//delete Folder
fs.rmdirSync("./FileModule")
