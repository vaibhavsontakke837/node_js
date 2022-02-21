const path = require("path")

// console.log(path)

//retur path of file
console.log(path.dirname("E:/Addivic/Node JS/path.js"))

//return extention name
console.log(path.extname("demo.js"))

// return file name
console.log(path.basename("E:/Addivic/Node JS"))

//parse return object with properties ext,name ,root,base, dir
console.log(path.parse("E:/Addivic/Node JS/path.js"))
