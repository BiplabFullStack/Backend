const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res)=>{
    const data =fs.readFileSync(`${__dirname}/userApi.json`,"utf-8")
    const objData =JSON.parse(data);
    if(req.url === "/home"){
        res.end("<h1>Welcome to Home Page</h1>")
    }else if(req.url === "/about"){
        res.end("<h1>Welcome to AboutUs Page</h1>")
    }else if(req.url === "/node"){
        res.end("<h1>Welcome to NodeJS Page</h1>")
     }else if(req.url === "/userApi"){
        res.end(objData[1].name)  //Access perticular person name its store array of an object
        //Using Asynchronous
        /*
        fs.readFile(`${__dirname}/userApi.json`,"utf-8", (err, data)=>{
            console.log(data);
            
            res.end(data)
        })
        */

        //res.end("<h1>Welcome to NodeJS Page</h1>")
     }
     else{
        res.writeHead(404,{"content-type":"text/HTML"})
        res.end("<h1> 404 error, page not found</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port no 8000");
});