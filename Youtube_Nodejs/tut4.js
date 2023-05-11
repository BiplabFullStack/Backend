// ---------------------------------------- "fs" Module ------------------------------------
//Create a folder

const fs = require("fs");

//Create Folder


fs.mkdir("NewFolder", (err)=>{
    console.log("Folder Created");
})


// File created

fs.writeFile("./NewFolder/biodata.txt","My name is Biplab Roy",(err)=>{
    console.log("File Created");
})


//Data append in the same file

fs.appendFile("./NewFolder/biodata.txt"," I belong to a middle class family and I am from West Bengal", (err)=>{
    console.log("Append Successfully Done");
})

// Read File

fs.readFile("./NewFolder/biodata.txt","utf-8",(err, data)=>{
    console.log(data);
    console.log(err);
})


//Rename File

fs.rename("./NewFolder/biodata.txt","./NewFolder/myBioData.txt", (err)=>{
    console.log("Rename SuccssFully Done");
})


//Delete File

fs.unlink("./NewFolder/myBioData.txt",(err)=>{
    console.log("File Deleted");
})


//Delete Folder
fs.rmdir("./NewFolder",(err)=>{
    console.log("Delete Folder");
})
