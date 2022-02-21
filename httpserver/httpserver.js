const http=require("http")

http.createServer((req,res)=>{

    console.log(req.body)
    const data = JSON.stringify({
        "userId":1,
        "id":165,
        "title":"Node Js"
    })

    res.write("server Created  ")
    res.write(data)
    res.end()
}).listen(5000)