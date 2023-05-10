const fs = require("fs")

//WriteFile
fs.writeFile("async.txt", "I am a Backend Student of the Sharpener",(err)=>{
   // console.log("Successfully Run");
   // console.log(err);
})

//Append text into file
fs.appendFile("async.txt", "My current task is node.js", (err)=>{
   // console.log("Successfully Run");
   // console.log(err);
})

//Read File
fs.readFile("async.txt","utf-8",(err, data)=>{
    console.log(data);
    console.log(err);
})