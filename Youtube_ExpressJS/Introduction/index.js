// ----------------------------------------- EXpressJs -----------------------------------------------
/* Express Js is a node.js Framework and its a Web application framework that provides  with a simple API to
build websites, web app and backend.

Why needed Express ?
Ans : We can write less time and less line of code and very fast compair to node.Js                  */

const express = require("express");
const app = express();
const PORT =8000;

//Get API
app.get("/", (req,res)=>{
    res.send("Welcome to Home Page");
})

//
app.get("/about", (req,res)=>{
    res.send("Welcome to about Page");
})

app.listen(PORT,()=>{
    console.log(`Port running with ${PORT}`);
})