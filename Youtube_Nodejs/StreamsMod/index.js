// ----------------------------------   Streams   -------------------------------------
/*
Streams  are objects that let you read data from a source write data to a destination in continouse fation.
In node.js there are four four type of streams --

Streaming means listening to music and watching video in real time, instreads of downloading a file to your computer
and watching later.
 Readable : Stream which is use for read operation
 writable : Stream which is use for Write operation
 Duplex  : Stream which is use for both Write and read operation
 Transform : A type of duplex stream where the o/P is computed base on input.
*/

const fs = require("fs");
const http = require("http")

const server = http.createServer();

//withOut striming
/*
server.on("request",(req, res)=>{
    fs.readFile("input.txt","utf-8",(err, data)=>{
        if(err) return console.log(err);
        res.end(data)
    })
})
*/

//Use Striming 2nd away
server.on("request", (req, res) => {
    const rstream = fs.createReadStream("inputs.txt");
    rstream.on("data", (chunkdata) => {
        res.write(chunkdata)
    })
    rstream.on("end", () => {
        res.end()
    })
    rstream.on("error",(err)=>{
        console.log(err);
        res.end("Page not found")
    })
})



// 3rd away(Use Striming pipe() )

server.on("request", (req, res) => {
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res)
})

server.listen(8000, "127.0.0.1")